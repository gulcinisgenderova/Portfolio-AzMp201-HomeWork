import Child from "../components/Child";
import UserRoot from "../layout/UserRoot";
import AdminPanel from "../pages/AdminPanel";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Search from "../pages/Search";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
];

export default routes;