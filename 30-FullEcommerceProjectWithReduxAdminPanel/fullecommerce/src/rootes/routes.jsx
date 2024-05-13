import Child from "../components/Child";
import UserRoot from "../layout/UserRoot";
import AdminPanel from "../pages/AdminPanel";
import Basket from "../pages/Basket";
// import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

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
        path: "/basket",
        element: <Basket />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
];

export default routes;