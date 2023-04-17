import styles from "./SidebarContainer.module.scss";

function SidebarContainer({ children }: { children: JSX.Element }) {
  return <aside className={styles.sidebar}>{children}</aside>;
}

export default SidebarContainer;
