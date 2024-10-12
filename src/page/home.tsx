import Profile from "../ui/comp/profilepic/Profile";
import ScrollButton from "../ui/comp/scrollButton/ScrollButton";
import Certificates from "./certificates";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Profile />
      {/* <Text /> */}
      <Certificates />
      <ScrollButton />
    </div>
  );
}

export default Home;
