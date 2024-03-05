import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Projects from "./page/projects";
import Navbar from "./ui/comp/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
