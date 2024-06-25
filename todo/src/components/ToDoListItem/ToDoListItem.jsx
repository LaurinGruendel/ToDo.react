import styles from "./styles.module.css";
export function ToDoListItem({ isChecked, itemName }) {
  return (
    <li className={isChecked ? styles.checked : styles.notChecked}>
      {itemName}
    </li>
  );
}
