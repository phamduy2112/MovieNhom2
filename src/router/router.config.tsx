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
      }
    ]
  }
]);
