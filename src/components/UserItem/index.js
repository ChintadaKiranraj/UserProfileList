import "./index.css";

const UserItem = (props) => {
  const { eachItem, onDeleteUser } = props;
  const { avatar, email, firstName, lastName, id } = eachItem;

  const onDelete = () => {
    onDeleteUser(id);
  };
  return (
    <li className="each-list-item">
      <div className="profile-userDetails">
        <div>
          <img src={avatar} className="profile-pick-avatar" alt="avatar" />
        </div>
        <div className="user-name-email-container">
          <p className="user-name">
            <span className="span-element">Name:</span>
            {`${firstName}${lastName}`}
          </p>
          <p className="user-email">
            <span className="span-element">Email:</span>
            {`${email}`}
          </p>
        </div>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
export default UserItem;
