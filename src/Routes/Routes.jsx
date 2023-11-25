import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import AllArticle from "../Pages/AllArticle/AllArticle";
import ArticleDetails from "../Pages/AllArticle/ArticleDEtiles/ArticleDetails";
import Subscription from "../Pages/Subscription/Subscription";
import Payment from "../Component/Payment";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PremiumArticles from "../Pages/Dashboard/PremiumArticles/PremiumArticles";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyArticle from "../Pages/Dashboard/MyArticle/MyArticle";




export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            
            {
                  path:'allarticles',
                  element:<PrivateRoute><AllArticle></AllArticle></PrivateRoute>
            },
            {
                  path:'articledetils/:id',
                  element:<ArticleDetails></ArticleDetails>
            },
            {
                  path:'subscription',
                  element:<Subscription></Subscription>
            },
            {
                  path:'payment',
                  element:<Payment></Payment>
            },
            {
                  path:'login',
                  element:<Login></Login>
            },
            {
                 path:'signup',
                 element:<SignUp></SignUp>
            },
        ]
      },
      {
            path:'dashboard',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children: [
                  {
                        path: 'userHome',
                        element:<UserHome></UserHome>
                  },
                  {
                        path: 'PremiumArticles',
                        element:<PremiumArticles></PremiumArticles>
                  },
                  {
                        path: 'profile',
                        element:<MyProfile></MyProfile>
                  },
                  {
                        path: 'myArticle',
                        element:<MyArticle></MyArticle>
                  },
                  
            ]
      }
    ]);