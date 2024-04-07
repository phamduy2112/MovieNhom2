import { createBrowserRouter } from "react-router-dom";
import UserTemplate from "../template/user/UserTemplate";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Movies from "../page/movies/Movies";
import { Profile } from "../page/Profile/profile";

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element:<Home />

      },
      {
        path:'/movies',
        element:<Movies />
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
