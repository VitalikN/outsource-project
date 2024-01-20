"use client";

import { oswald } from "@/utils/fonts";
import Network from "./Network";
import styles from "@/sass/layouts/contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.section} id="Contact">
      <div className={`${styles.container} ${styles.contact__container}`}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__center} ${styles.contact__title}`}
        >
          Contact us
        </h2>
        <div className={styles.contact__box}>
          <Network />
        </div>
      </div>
    </section>
  );
};
export default Contact;
