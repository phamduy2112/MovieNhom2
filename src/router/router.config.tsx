import { createBrowserRouter } from "react-router-dom";
import UserTemplate from "../template/user/UserTemplate";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Movies from "../page/movies/Movies";
import { Profile } from "../page/Profile/profile";
import AdminTemplate from "../template/admin/AdminTemplate";
import Films from "../page/Admin/films/Films";
import CreateFilm from "../page/Admin/create-film/CreateFilm";
import EditFilm from "../page/Admin/edit-film/EditFilm";
import CreateShowTime from "../page/Admin/create-showtime/CreateShowTime";

import CreateUser from "../page/Admin/create-user/CreateUser";
import ProductDetails from "../page/productDetails/productDetails";
import TicketRoom from "../page/tikectRoom/ticketRoom";
import Users from "../page/Admin/users/Users";
import EditUser from "../page/Admin/edit-user/EditUser";

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
        path:'/ticketroom/:productID',
        element:<TicketRoom/>
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
        path:'profile',
        element: <Profile/>
      }
    ],
  },
  {
    path: 'admin',
    element: <AdminTemplate/>,
    children:[
      {
        path: 'films',
        element: <Films/>
      },
      {
        path: 'createfilm',
        element: <CreateFilm/>
      },
      {
        path: 'editfilm/:id',
        element: <EditFilm/>
      },
      {
        path: 'showtime/:id/:tenphim',
        element: <CreateShowTime/>
      },
      {
        path: 'users',
        element: <Users/>
      },
      {
        path: 'createuser',
        element: <CreateUser/>
      },
      {
        path:'edituser/:taiKhoan',
        element: <EditUser/>
      }
    ]
  }
]);
