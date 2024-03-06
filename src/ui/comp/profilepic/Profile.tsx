import "./Profile.css";
import naruto from "../../../images/naruto.png";

function Profile() {
  return (
    <div className="profilepic-center">
      <img src={naruto} alt="" className="profile center" />
      <p className="center profile_name">Dinesh Pandikona</p>
    </div>
  );
}

export default Profile;
