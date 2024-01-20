"use client";

import { oswald, firaSans } from "@/utils/fonts";
import styles from "@/sass/layouts/hero.module.scss";

import { useDynamicHeight } from "./hooks";

const Hero = () => {
  const dynamicHeight = useDynamicHeight();

  return (
    <section className={styles.hero} id="Hero">
      <div className={styles.container}>
        <div className={styles.hero__container__title}>
          <h1 className={`${styles.hero__title} ${oswald.className}    `}>
            Ukraine
          </h1>
          <div className={styles.hero__box__text}>
            <p className={`${styles.hero__text}  ${firaSans.className} `}>
              Peoukraine makes it fast and easy to employ remote talent in
              Ukraine. We take care of payroll, compliance, taxes, and admin so
              you can focus on growing your business.
            </p>
          </div>
        </div>

        <div
          className={styles.hero__overley}
          style={{ height: `${dynamicHeight}px` }}
        ></div>
      </div>
    </section>
  );
};
export default Hero;
