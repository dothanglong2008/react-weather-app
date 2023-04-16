import styles from "./Heading.module.scss";

function Heading({ content }: { content: JSX.Element }) {
  return <h1 className={styles.heading}>{content}</h1>;
}

export default Heading;
