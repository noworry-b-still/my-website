import { useState, useEffect } from "react";
import "./ScrollButton.css"; // Ensure this file contains the styles

const ScrollButton = () => {
  const [atBottom, setAtBottom] = useState(false); // To track if user is at the bottom
  const [visible, setVisible] = useState(false); // To manage button visibility
  const threshold = 100; // Define the threshold (in pixels) from the bottom of the page

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Detect if the user has scrolled to the threshold from the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const atPageBottom =
        scrollPosition >= document.body.offsetHeight - threshold;

      setAtBottom(atPageBottom);
      setVisible(atPageBottom || visible); // Show the button if we are near the bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  // Show button after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (atBottom) setVisible(true); // Only set visible if already near the bottom
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [atBottom]);

  return (
    <div className="scroll-button-container">
      {visible && (
        <button
          className={`scroll-button ${atBottom ? "scroll-up" : "scroll-down"}`}
          onClick={atBottom ? scrollToTop : scrollToBottom}
        >
          {atBottom ? "▲" : "▼"}
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
