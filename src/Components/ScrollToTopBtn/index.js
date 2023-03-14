import { useState } from "react";
import { ScrollIcon } from "@/assets/icons";

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className={`fixed right-10 ${visible ? "inline" : "hidden"}`}
      onClick={scrollToTop}
      style={{ bottom: "30vh" }}
    >
      <ScrollIcon />
    </button>
  );
}

export default ScrollToTopBtn;
