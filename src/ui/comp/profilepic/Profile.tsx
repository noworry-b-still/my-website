import "./Profile.css";
import profile_pic from "../../../images/profile-pic.png";

function Profile() {
  return (
    <div className="profilepic-center">
      <img src={profile_pic} alt="" className="profile center" />
      <p className="center profile_name">Dinesh Pandikona</p>
    </div>
  );
}

export default Profile;
