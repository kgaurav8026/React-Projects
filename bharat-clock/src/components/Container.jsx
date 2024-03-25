import styles from "./Container.module.css";
// passing children as props
const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
export default Container;
