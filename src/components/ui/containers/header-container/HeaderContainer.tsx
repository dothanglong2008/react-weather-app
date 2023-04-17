import styles from "./HeaderContainer.module.scss";

function HeaderContainer({ children }: { children: JSX.Element }) {
  return <header className={styles.header}>{children}</header>;
}

export default HeaderContainer;
