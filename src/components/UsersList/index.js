import { Component } from "react";
import UserItem from "../UserItem";
import "./index.css";
// import TotalPagesButton from "../TotalPagesButton";

class UsersList extends Component {
  state = {
    page: 1,
    isClick: false,
    totalPages: 0,

    usersList: [],
  };

  componentDidMount() {
    console.log("component did mount is called");
    this.getUsersList();
  }
  getUsersList = async () => {
    const { page } = this.state;

    const options = {
      method: "GET",
    };

    let url = `https://reqres.in/api/users?page=${page}`;

    // let url = "https://reqres.in/api/users?page=1";

    const response = await fetch(url, options);
    const fetchedData = await response.json();
    console.log(fetchedData);

    const { data, total_pages } = fetchedData;
    console.log(total_pages, "total_pages");

    const UpdatedData = data.map((eachItem) => ({
      id: eachItem.id,
      firstName: eachItem.first_name,
      lastName: eachItem.last_name,
      avatar: eachItem.avatar,
      email: eachItem.email,
    }));
    this.setState((prevState) => ({
      usersList: UpdatedData,
      isClick: false,
      totalPages: total_pages,
    }));
  };

  // incrementing the page count num

  onIncrement = () => {
    this.setState((prevState) => {
      const { page, totalPages } = prevState;

      if (page + 1 <= totalPages) {
        return {
          page: prevState.page + 1,
          isClick: true,
        };
      }
    });
  };

  onDecrement = () => {
    this.setState((prevState) => {
      const { page } = prevState;

      if (page - 1 > 0) {
        return {
          page: prevState.page - 1,
          isClick: true,
        };
      }
    });
  };

  onClickPage_1 = () => {
    console.log("onclick page1");
    this.setState({
      page: 1,
      isClick: true,
    });
  };
  onClickPage_2 = () => {
    console.log("onclick page2");
    this.setState({
      page: 2,
      isClick: true,
    });
  };

  onDeleteUser = (id) => {
    const { usersList } = this.state;
    const filteredUsers = usersList.filter((eachUser) => eachUser.id !== id);
    this.setState({
      usersList: filteredUsers,
    });
  };

  displayUsersList = () => {
    const { usersList, page } = this.state;
    console.log(usersList, ":usersList first time");
    const button_1 = page === 1 ? "activeButton" : " ";
    const button_2 = page === 2 ? "activeButton" : " ";

    return (
      <div>
        <ul className="Users-list-items">
          {usersList.map((eachItem) => (
            <UserItem
              eachItem={eachItem}
              key={eachItem.id}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>

        <div className="buttons-container">
          <button
            type="button"
            className="button navigate-button"
            onClick={this.onDecrement}
          >{`<`}</button>

          <button className={`button ${button_1}`} onClick={this.onClickPage_1}>
            1
          </button>
          <button className={`button ${button_2}`} onClick={this.onClickPage_2}>
            2
          </button>

          <button
            type="button"
            className="button navigate-button"
            onClick={this.onIncrement}
          >
            {`>`}
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { isClick, page } = this.state;
    console.log(page);
    if (isClick === true) {
      this.getUsersList();
    }

    return this.displayUsersList();
  }
}

export default UsersList;
