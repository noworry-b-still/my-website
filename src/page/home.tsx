import Profile from "../ui/comp/profilepic/Profile";
import Certificates from "./certificates";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Profile />
      {/* <Text /> */}
      <Certificates />
    </div>
  );
}

export default Home;
