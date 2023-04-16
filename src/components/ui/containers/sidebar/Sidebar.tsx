import styles from "./Sidebar.module.scss";

function Sidebar({ children }: { children: JSX.Element }) {
  return <aside className={styles.sidebar}>{children}</aside>;
}

export default Sidebar;
