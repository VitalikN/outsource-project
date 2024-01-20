"use client";

import Burger from "@/components/Burger";
import Logo from "@/components/Logo";
import styles from "@/sass/layouts/header.module.scss";
import { Link as LinkScroll } from "react-scroll";
import Button from "./Button";

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.container} ${styles.container__header} `}>
        <Logo />
        <div className={styles.header__btn}>
          <Burger />

          <div className={styles.header__display}>
            <LinkScroll
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1700}
              className={styles.menu__link}
            >
              <Button title={"Get in touch"} />
            </LinkScroll>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
