"use client";
import styles from "@/sass/layouts/cases.module.scss";
import { oswald } from "@/utils/fonts";
import { useDynamicHeight } from "./hooks";
const Cases = () => {
  const dynamicHeight = useDynamicHeight();
  return (
    <section className={styles.section} id="Cases">
      <div className={styles.container}>
        <div
          className={styles.hero__overley}
          style={{ height: `${dynamicHeight}px` }}
        ></div>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__cases} `}
        >
          Grow your global team. Employ the best talent, anywhere in the world
        </h2>
        <p className={styles.mainCompany__list__item__text}>
          The benefits of growing a global team and finding the best talent
          anywhere in the world are endless. It’s important to note that labour
          laws and regulations in Ukraine are strict with penalties for
          non-compliance. Let our team take care of the global employment
          solutions such as payroll, benefits, compliance, taxes, and admin so
          you can focus on growing your business. We are here to help you every
          step of the way.
        </p>
      </div>
    </section>
  );
};
export default Cases;
