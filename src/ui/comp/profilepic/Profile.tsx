import "./Profile.css";
import naruto from "../../../naruto.png";

function Profile() {
  return (
    <div className="image-center">
      <img src={naruto} alt="" className="profile center " />
      <p className="center profile_name">Naruto Uzumaki</p>
    </div>
  );
}

export default Profile;
