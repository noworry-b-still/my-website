import Navbar from "../ui/comp/navbar/Navbar";
import Profile from "../ui/comp/profilepic/Profile";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
    </div>
  );
}

export default Home;
