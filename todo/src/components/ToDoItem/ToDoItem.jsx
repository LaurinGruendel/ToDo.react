import { useState } from "react";
import { CheckBox } from "../CheckBox";
import styles from "./styles.module.css";
import { ToDoListItem } from "../ToDoListItem/ToDoListItem";

export function ToDoItem({ itemName }) {
  const [isChecked, setIsChecked] = useState(false);
  function onBoxIsChecked() {
    setIsChecked(!isChecked);
  }
  return (
    <div className={styles.toDoItemContainer}>
      <CheckBox onCheckingBox={onBoxIsChecked} />
      <ToDoListItem itemName={itemName} />
    </div>
  );
}
