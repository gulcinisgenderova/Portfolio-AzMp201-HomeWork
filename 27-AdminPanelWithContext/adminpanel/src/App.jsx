import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from 'react'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Post from "./pages/Post"
import User from "./pages/User"
import "../src/index.css"
import './App.css'
import reducer from "reducers/reducer";
import { getAllData } from "./servicess";
import { endPoints } from "./servicess/api";
import LoginPage from "./pages/LoginPage";
import Postpages from "./pages/Postpages";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail/detail";


function App() {
  const [state, dispatch] = useReducer(reducer, {
  suppliers: [],
 
  });

  useEffect(() => {
    getAllData(endPoints.suppliers).then((data) => {
      // console.log(data);
      dispatch({
        type: "SetProducts",
        suppliers: data,
      });
    });
  }, []);

  const {suppliers}= state
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Admin />} />
        <Route path="admin" element={<Admin suppliers={suppliers} />} />
        <Route path="post" element={<Post />} />
        <Route path="postpages" element={<Postpages />} />
        <Route path="user" element={<User />} />
        <Route path="/:id" element={<Detail  />} />
        <Route path="loginPage" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App