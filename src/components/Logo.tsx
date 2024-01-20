import Link from "next/link";
import { oswald } from "@/utils/fonts";
import styles from "@/sass/layouts/logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <div className={`${styles.logoContainer} ${oswald.className}`}>
        <span className={styles.logo__chip}>
          Peo
          <span className={styles.logo__color}>ukraine</span>
        </span>
      </div>
    </Link>
  );
};
export default Logo;
