 import React from "react";
 import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 300;
    setVisible(scrollTop <= scrollThreshold);
  };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={` w-[60px] h-[60px] bg-fineYellow z-[999999] fixed shadow-5xl  right-[25px] bottom-[30px] rounded-full hover:bg-fineYellow2 text-white text-3xl ${visible ? " hidden" : "block"}`}
      onClick={ScrollToTop}
    >
      <span className="material-symbols-outlined">vertical_align_top</span>
    </button>
  );
};
