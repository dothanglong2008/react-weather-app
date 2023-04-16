import styles from "./Footer.module.scss";

function Footer({ children }: { children: JSX.Element }) {
  return <footer className={styles.footer}>{children}</footer>;
}

export default Footer;
