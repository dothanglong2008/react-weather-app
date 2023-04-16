import styles from "./Main.module.scss";

function Main({ children }: { children: JSX.Element }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
