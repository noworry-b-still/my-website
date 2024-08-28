import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Projects from "./page/projects";
import Navbar from "./ui/comp/navbar/Navbar";
import Certificates from "./page/certificates";
import Contact from "./page/contact";
import Banner from "./ui/comp/banner/Banner";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
