import "./index.css";

const UserProfile = (props) => {
  const { userDetails, DeleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;

  const onDelete = () => {
    DeleteUser(uniqueNo);
  };

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" onClick={onDelete}>
        X
      </button>
    </li>
  );
};
export default UserProfile;
