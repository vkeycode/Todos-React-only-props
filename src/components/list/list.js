
import React from "react";
import Todo from "../todo/todo";
import Style from "./style.module.scss";

const List = ({ todos, deleteTodo, setDone  }) => {


  return (
    <div className={Style.container}>
      {
        todos.map((item, index) => {
          return <Todo
            id={index}
            todo={item}
            key={index}
            deleteTodo={deleteTodo}
            setDone={setDone}
          />;
        })}
    </div>
  );
};

export default List;
