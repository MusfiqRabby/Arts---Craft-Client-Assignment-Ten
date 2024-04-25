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
  
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
            path: '/artcraftitme',
            element: <ArtCraftItem/>
        },
        {
            path: '/addcart',
            element: <AddCraft/>
        },
        {
            path: '/artcraft',
            element: <ArtCraftList/>
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
      ],
    },
  ]);

  export default routes;