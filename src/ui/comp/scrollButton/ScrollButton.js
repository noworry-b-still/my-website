import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./ScrollButton.css";

const ScrollButton = ({ audioControlsVisible = false }) => {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);
  const threshold = 100;

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Detect if the user has scrolled near the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const atPageBottom =
        scrollPosition >= document.body.offsetHeight - threshold;

      setAtBottom(atPageBottom);
      setVisible(window.scrollY > 300 || atPageBottom); // Show when scrolled down enough
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <div className={`scroll-button-container ${audioControlsVisible ? 'scroll-button-with-audio' : ''}`}>
      {visible && (
        <button
          className={`scroll-button ${atBottom ? "scroll-up" : "scroll-down"}`}
          onClick={atBottom ? scrollToTop : scrollToBottom}
          aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
        >
          {atBottom ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      )}
    </div>
  );
};

export default ScrollButton;