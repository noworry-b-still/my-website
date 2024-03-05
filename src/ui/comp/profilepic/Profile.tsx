import "./Profile.css";
import naruto from "../../../naruto.png";

function Profile() {
  return (
    <div>
      <div className="profile_container">
        <img src={naruto} alt="" className="profile" />
      </div>
      <p className="center profile_name">Naruto Uzumaki</p>
    </div>
  );
}

export default Profile;
