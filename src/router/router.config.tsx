import { createBrowserRouter } from "react-router-dom";
import UserTemplate from "../template/user/UserTemplate";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Movies from "../page/movies/Movies";
import { Profile } from "../page/Profile/profile";
import ProductDetails from "../page/productDetails/productDetails";

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element:<Home />

      },
      {
        path:'/detail/:productID',
        element:<ProductDetails />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/profile',
        element: <Profile/>
      }
    ],
  },
]);
