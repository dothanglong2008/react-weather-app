import styles from "./SectionContainer.module.scss";

function SectionContainer({ children }: { children: JSX.Element }) {
  return <section className={styles.section}>{children}</section>;
}

export default SectionContainer;
