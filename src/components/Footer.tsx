"use client";
import Link from "next/link";
import Logo from "./Logo";
import { BsArrowRight } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

import styles from "@/sass/layouts/footer.module.scss";
import { firaSans } from "@/utils/fonts";
const Footer = () => {
  return (
    <footer className={`${styles.footer} ${firaSans.className}`}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.footer__arrow__box}>
          <LinkScroll
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1700}
          >
            <span
              className={`${styles.footer__icon__chip} ${styles.footer__chip}`}
            >
              <BsArrowRight className={styles.footer__icon} />
            </span>
          </LinkScroll>
        </div>

        <div className={styles.footer__link__map__box}>
          <Link
            className={`${styles.footer__link} ${styles.link2}`}
            target="_blank"
            href="mailto:peoukraine.gmail.com"
          >
            peoukraine.gmail.com
          </Link>
          <Link
            target="_blank"
            href="/"
            className={`${styles.footer__link} ${styles.link3}`}
          >
            Peoukraine &#169; 2024
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
