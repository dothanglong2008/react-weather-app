import styles from "./Header.module.scss";

function Header({ children }: { children: JSX.Element }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
