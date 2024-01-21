import Link from "next/link";

import styles from "@/sass/layouts/network.module.scss";

const Network = () => {
  return (
    <ul className={styles.network__list}>
      <li className={styles.network__list__item}>
        <p className={styles.network__list__item__title}>E-mail:</p>
        <Link
          className={styles.network__list__item__link}
          target="_blank"
          href="mailto:peoukraine@gmail.com"
        >
          <svg className={styles.network__social} width="24px" height="24px">
            <use href="/symbol-defs.svg#icon-sms"></use>
          </svg>
          peoukraine@gmail.com
        </Link>
      </li>
    </ul>
  );
};
export default Network;
