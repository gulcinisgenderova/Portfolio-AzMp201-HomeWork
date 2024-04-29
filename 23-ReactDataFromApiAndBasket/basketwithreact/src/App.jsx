import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LifeCycle from "./components/LifeCycle";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import Table from "./components/Table";
// import Basket from "./components/Basket";


function App() {
  let [count, setCount] = useState(0);

  // console.log("app render olundu");

  return (
    <>
      {/* <LifeCycle /> */}
      {/* <Basket />

      <Table /> */}
      <Home/>
    </>
  );
}

export default App;
