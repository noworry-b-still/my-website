import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Projects from "./page/projects";
import Navbar from "./ui/comp/navbar/Navbar";
import Contact from "./page/contact";
import Blog from "./page/blog";
import BlogPost from "./ui/comp/blogPost/BlogPost";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />{" "}
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
