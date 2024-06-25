import styles from "./styles.module.css";

export function CheckBox({ onCheckingBox }) {
  return (
    <input
      id="checkbox"
      className={styles.checkbox}
      type="checkbox"
      onClick={onCheckingBox}
    ></input>
  );
}
