import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ErrorPage from "../pages/Navbar/ErrorPage";
import ArtCraftItem from "../pages/Navbar/ArtCraftItem";
import AddCraft from "../pages/Navbar/AddCraft";
import ArtCraftList from "../pages/Navbar/ArtCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import SocialLogin from "../pages/Login/SocialLogin";
import PrivateRoute from "../pages/Navbar/PrivateRoute/PrivateRoute";
import ViewDetails from "../pages/Home/userCard/ViewDetails";
import UpdatePage from "../pages/Navbar/UpdatePage/UpdatePage";
  
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('http://localhost:5000/users')
        },
        {
            path: '/artcraftitme',
            element: <ArtCraftItem/>,
            loader: () => fetch('http://localhost:5000/artcraft')
        },
        {
            path: '/addcart',
            element: <PrivateRoute>
                <AddCraft/>
            </PrivateRoute>
        },
        {
            path: '/artcraft',
            element: <PrivateRoute>
              <ArtCraftList/>
            </PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/sociallogin',
            element: <SocialLogin/>
        },
        {
            path: '/viewdetails/:id',
            element:  <PrivateRoute>
              <ViewDetails/>
            </PrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
          path: '/updatepage/:id',
          element: <PrivateRoute>
            <UpdatePage/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
        }
      ],
    },
  ]);

  export default routes;