import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import style from "./style.module.css";
const ToDoAPP = () => {
  function getData(data) {
    console.log(data);
  }
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div>
      ToDoAPP
      <h1 className={style.box}>Box</h1>
      <Header todos={todos} setTodos={setTodos} />
      <Footer getData={getData} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDoAPP;
