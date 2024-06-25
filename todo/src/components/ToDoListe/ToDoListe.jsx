import { useState } from "react";
import { ToDoItem } from "../ToDoItem";

export function ToDoListe({}) {
  const [list, setList] = useState(Array<React.Component>);
  const addItem = () => {
    newItem = <ToDoItem itemName="Krabmm" />;
    setList(...list, newItem);
  };
  return (
    <>
      <button onClick={addItem}></button>
      <ol>{list.}</ol>
    </>
  );
}
