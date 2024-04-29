import React, { useEffect, useState } from "react";
import ToDoApp from "./../ToDoAPP";
import style from "./style.module.css";
import { Button } from "react-bootstrap";

import { Title } from "./styleComponent";
const LifeCycle = () => {
  console.log("style", style);
  const [result, setResult] = useState(true);
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component yarandi ");
  }, []);
  useEffect(() => {
    console.log("component render olundu");
  });
  useEffect(() => {
    console.log("count deyisende calisiram");
  }, [count]);
  return (
    <div>
      <Title>LifeCycle</Title>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <h1 className={style.box}>Box</h1>
      <button onClick={() => setResult(!result)}>Change</button>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        INC
      </button>
      <ToDoApp />
    </div>
  );
};

export default LifeCycle;
