import "./ToTopButton.css";
import React, { useState } from "react";

const ToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    visible && (
      <button onClick={scrollToTop} className="toTopButton">
        Top
      </button>
    )
  );
};

export default ToTopButton;
