import styles from "./Text.module.scss";

type Content = string;

interface TextProps {
  content: Content;
}

function Text({ content }: TextProps) {
  return <span className={styles.text}>{content}</span>;
}

export default Text;
