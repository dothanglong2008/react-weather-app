import styles from "./Section.module.scss";

function Section({ children }: { children: JSX.Element }) {
  return <section className={styles.section}>{children}</section>;
}

export default Section;
