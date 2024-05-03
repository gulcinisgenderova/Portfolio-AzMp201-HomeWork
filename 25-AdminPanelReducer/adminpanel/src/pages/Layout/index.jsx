import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from './Navbar';
const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
      </nav> */}
<Navbar/>
      <Outlet />
    </>
  )
}

export default Layout