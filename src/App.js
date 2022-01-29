/* eslint-disable no-undef */
import { Component } from "react";
import UserProfile from "./component/UserProfile";

import "./App.css";

const initialUsersLis = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
  {
    uniqueNo: 5,
    imageUrl:
      "https://res.cloudinary.com/dpnd1kxko/image/upload/v1634975589/IMG-20200820-WA0059_cbochc.jpg",
    name: "Chintada Kiranraj",
    role: "Software Developer",
  },
  {
    uniqueNo: 6,
    imageUrl:
      "https://res.cloudinary.com/dpnd1kxko/image/upload/v1634975568/IMG_20210821_163523_cwu4rt.jpg",
    name: "Tanuja Chintada",
    role: "Software Developer",
  },

  {
    uniqueNo: 7,
    imageUrl:
      "https://res.cloudinary.com/dpnd1kxko/image/upload/v1634975749/IMG_20200111_153538_dcgwzs.jpg",
    name: "Sirisha priya",
    role: "Software Developer",
  },

  {
    uniqueNo: 8,
    imageUrl:
      "https://res.cloudinary.com/dpnd1kxko/image/upload/v1634975576/IMG-20210701-WA0010_sp58fb.jpg",
    name: "Dhillamma Chintada",
    role: "Software Developer",
  },

  {
    uniqueNo: 9,
    imageUrl:
      "https://res.cloudinary.com/dpnd1kxko/image/upload/v1631995834/KARRIkumar_wl6um2.jpg",
    name: "karthic and kumar",
    role: "Software Developer",
  },
];

class App extends Component {
  state = { searchInput: "", userDetailsList: initialUsersLis };

  OnSearchChange = (event) =>
    this.setState(() => ({ searchInput: event.target.value }));

  DeleteUser = (RemovedUserNo) => {
    const { searchInput, userDetailsList } = this.state;

    console.log(searchInput);
    console.log(`searchInput:${searchInput}`);

    const filterdUserslist = userDetailsList.filter(
      (eachUser) => eachUser.uniqueNo !== RemovedUserNo
    );

    console.log("userDetailsList when clling the delete function ");
    console.log(userDetailsList);
    console.log("after deleting the key User remaing list is  ");
    console.log(filterdUserslist);
    console.log(
      `aftere deleting the user key  filtered list is assigned to the userDetailsList`
    );
    this.setState({ userDetailsList: filterdUserslist });
    console.log("userDetailsList", userDetailsList);
  };

  render() {
    const { searchInput, userDetailsList } = this.state;

    const filteredList = userDetailsList.filter((eachPerson) =>
      eachPerson.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    console.log(`searchInput:${searchInput}`);

    console.log("filteredList");
    console.log(filteredList);
    console.log("userDetailsList");
    console.log(userDetailsList);

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.OnSearchChange}
        />
        <ul className="list-container">
          {filteredList.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              DeleteUser={this.DeleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
