import Navbar from "../ui/comp/navbar/Navbar";
import Profile from "../ui/comp/profilepic/Profile";
import Text from "../ui/comp/text-section/text";
import Banner from "../ui/comp/banner/Banner";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <Text />
      <Banner />
    </div>
  );
}

export default Home;
