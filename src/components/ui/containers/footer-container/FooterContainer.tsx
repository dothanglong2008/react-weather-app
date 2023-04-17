import styles from "./FooterContainer.module.scss";

function FooterContainer({ children }: { children: JSX.Element }) {
  return <footer className={styles.footer}>{children}</footer>;
}

export default FooterContainer;
