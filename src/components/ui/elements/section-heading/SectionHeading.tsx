import styles from "./SectionHeading.module.scss";

function SectionHeading({ content }: { content: JSX.Element }) {
  return <h2 className={styles.sectionHeading}>{content}</h2>;
}

export default SectionHeading;
