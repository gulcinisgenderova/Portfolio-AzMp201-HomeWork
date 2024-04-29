import React from "react";
import Todo from "./Todo";

const Footer = ({ getData, todos, setTodos }) => {
  return (
    <ul>
      ToDos
      {todos.map((elem, i) => {
        return <Todo key={i} todo={elem} todos={todos} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default Footer;
