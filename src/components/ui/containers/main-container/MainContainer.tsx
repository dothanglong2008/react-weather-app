import styles from "./MainContainer.module.scss";

function MainContainer({ children }: { children: JSX.Element }) {
  return <main className={styles.main}>{children}</main>;
}

export default MainContainer;
