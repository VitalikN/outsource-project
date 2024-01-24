import styles from "@/sass/layouts/button.module.scss";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => (
  <div className={styles.header__touch}>
    {title}
    <svg className={styles.header__touch__chip} width="14px" height="14px">
      <use href="/symbol-defs.svg#icon-arrow"></use>
    </svg>
  </div>
);
export default Button;
