"use client";

import styles from "@/sass/layouts/burger.module.scss";
import { IoIosClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

import { Link as LinkScroll } from "react-scroll";

import { useMenu } from "./hooks";

const Burger = () => {
  const { menuOpen, toggleMenu, closeMenu, handleMenuClick, activeMenu } =
    useMenu();

  return (
    <>
      <div className={styles.burger__box}>
        <div className={styles.burger} onClick={toggleMenu}>
          <button type="button" className={styles.burger__button}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </div>
        {menuOpen && (
          <div className={styles.menu}>
            <button
              type="button"
              className={styles.menu__box__icon__close}
              onClick={closeMenu}
            >
              <IoIosClose className={styles.menu__icon} />
            </button>

            <nav className={styles.menu__list}>
              <LinkScroll
                onClick={() => handleMenuClick("about")}
                activeClass={styles.active}
                to="About"
                spy={true}
                smooth={true}
                offset={-85}
                duration={700}
                className={`${styles.menu__link} ${
                  activeMenu === "about" ? styles.active : ""
                }`}
              >
                About
                <GoArrowUpRight className={styles.menu__link__icon} />
              </LinkScroll>
              <LinkScroll
                onClick={() => handleMenuClick("Cases")}
                activeClass={styles.active}
                to="Cases"
                spy={true}
                smooth={true}
                offset={-90}
                duration={1400}
                className={`${styles.menu__link} ${
                  activeMenu === "Cases" ? styles.active : ""
                }`}
              >
                Cases
                <GoArrowUpRight className={styles.menu__link__icon} />
              </LinkScroll>

              <LinkScroll
                onClick={() => handleMenuClick("Contact")}
                activeClass={styles.active}
                to="Contact"
                spy={true}
                smooth={true}
                offset={-85}
                duration={1700}
                className={`${styles.menu__link} ${
                  activeMenu === "Contact" ? styles.active : ""
                }`}
              >
                Contact Us
                <GoArrowUpRight className={styles.menu__link__icon} />
              </LinkScroll>
            </nav>
          </div>
        )}
      </div>
      {menuOpen && <div className={styles.overley} onClick={closeMenu}></div>}
    </>
  );
};
export default Burger;
