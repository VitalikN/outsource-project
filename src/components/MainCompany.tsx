"use client";
import { oswald } from "@/utils/fonts";
import styles from "@/sass/layouts/mainCompany.module.scss";
import Image from "next/image";

const MainCompany = () => {
  return (
    <section className={styles.section} id="About">
      <div className={styles.container} id="main">
        <div className={styles.mainCompany__container__title}>
          <h2
            className={`${styles.title} ${oswald.className} ${styles.mainCompany__title}`}
          >
            How does Peoukraine work in Ukraine?
          </h2>
          <span className={styles.chip}></span>
          <p className={styles.mainCompany__text}>
            Peoukraine provides global employment solutions and professional
            employment organisation (PEO) services for companies looking to grow
            and build out a global team in Ukraine. Traditional methods of
            establishing global employment and subsidiaries in Ukraine typically
            take months and can incur heavy costs. Peoukraine’s global
            employment solutions and PEO services is helping hundreds of
            organisations onboard new employees in Ukraine in a matter of days
            with full compliance of local labour laws. We use a tech-forward
            approach to streamline the process.
          </p>
        </div>
        <ul className={styles.mainCompany__list}>
          <li className={`${styles.mainCompany__list__item} ${styles.item1}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-maximize-circle"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Openness
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              Your company conducts the hiring and candidate selection process
              in Ukraine.
            </p>
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item2}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-global-edit"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Responsibility
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              Peoukraine hires the selected candidate through our local
              professional employment organisation in Ukraine.
            </p>
          </li>
          <li className={`${styles.mainCompany__item} ${styles.item3}`}>
            <Image
              className={styles.mainCompany__img}
              src="/Screensho.png"
              alt="Screensho"
              width="346"
              height="234"
              priority={true}
            />
          </li>
          <li className={`${styles.mainCompany__item} ${styles.item4}`}>
            <Image
              className={styles.mainCompany__img}
              src="/Screensho.png"
              alt="vnv"
              width="346"
              height="234"
              priority={true}
            />
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item5}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-cpu-charge"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Innovation
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              We take care of ensuring your new employee is hired in compliance
              with local labour laws, payroll regulations, benefits and more --
              all without needing to set up a subsidiary in Ukraine.
            </p>
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item6}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-ranking"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Quality
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              The individual is legally contracted by Peoukraine but assigned to
              work for your company and reports to a manager or team in your
              organisation as your full-time employee.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default MainCompany;
