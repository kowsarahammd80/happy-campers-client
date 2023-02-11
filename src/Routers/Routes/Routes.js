import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../../Components/CreateAccount/CreateAccount";
import Dashboard from "../../Components/Dashboard/Dashboard";
import LogIn from "../../Components/LogIn/LogIn";
import RecoverPassword from "../../Components/RecoverPassword/RecoverPassword";
import Main from "../../Layout/Main/Main";
import HomePages from "../../Pages/HomePages/HomePages";
import AdminRoute from "../AdminRoute/AdminRoute";

const routers = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
       
      {
        path: '/',
        element: <HomePages></HomePages>
      },

      {
        path: 'login',
        element: <LogIn></LogIn>
      },

      {
        path: '/createAccount',
        element: <CreateAccount></CreateAccount>
      },

      {
        path: '/recover',
        element: <RecoverPassword></RecoverPassword>
      },

      {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
      }


    ]
  }
  
])

export default routers