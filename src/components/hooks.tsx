import { useEffect, useRef, useState } from "react";

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState("main");

  const handleMenuClick = (section: string) => {
    setActiveMenu(section);
    closeMenu();
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return { menuOpen, toggleMenu, closeMenu, handleMenuClick, activeMenu };
};
export const useDynamicHeight = () => {
  const [dynamicHeight, setDynamicHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = Math.min(window.innerWidth, 1280);

      const w1 = 320,
        h1 = 200;
      const w2 = 768,
        h2 = 400;
      const w3 = 1280,
        h3 = 650;

      let calculatedHeight;

      if (viewportWidth <= w1) {
        calculatedHeight = h1;
      } else if (viewportWidth < w2) {
        calculatedHeight = h1;
      } else if (viewportWidth < w3) {
        calculatedHeight = h2;
      } else {
        calculatedHeight = h3;
      }
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dynamicHeight;
};
