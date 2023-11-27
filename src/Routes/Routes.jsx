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
import AddArticle from "../Pages/AddArticle/AddArticle";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateArticle";
import UpdateArticle from "../Pages/Dashboard/UpdateItem/UpdateArticle";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import AdminAllArticlePage from "../Pages/Dashboard/Admin/AdminAllArticlePage/AdminAllArticlePage";
import AddPublisher from "../Pages/Dashboard/Admin/AddPublisher/Addpublisher";
import ErrorPage from "../Component/ErrorPage";
import AdminPrivateRoute from "./AdminPrivateRoute";




export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
                  path:'addarticles',
                  element:<PrivateRoute><AddArticle></AddArticle></PrivateRoute>
            },
            
            {
                  path:'allarticles',
                  element:<AllArticle></AllArticle>
            },
            {
                  path:'articledetils/:id',
                  element:<PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>
            },
            {
                  path:'subscription',
                  element:<PrivateRoute><Subscription></Subscription></PrivateRoute>
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
                  // normal user routers 
                  {
                        path: 'userHome',
                        element:<UserHome></UserHome>
                  },
                  {
                        path: 'PremiumArticles',
                        element:<PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
                  },
                  {
                        path: 'profile',
                        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
                  },
                  {
                        path: 'myArticle',
                        element:<PrivateRoute><MyArticle></MyArticle></PrivateRoute>
                  },
                  {
                        path:'updateArticle/:id',
                        element:<UpdateArticle></UpdateArticle>,
                       
                  },
                  
                  // admin only routes 
                  {
                        path:'adminHome',
                        element:<AdminPrivateRoute><AdminHome></AdminHome></AdminPrivateRoute>
                  },
                  {
                        path:'allUser',
                        element:<AdminPrivateRoute><AllUser></AllUser></AdminPrivateRoute>
                  },
                  {
                        path:'allArticle',
                        element:<AdminPrivateRoute><AdminAllArticlePage></AdminAllArticlePage></AdminPrivateRoute>
                  },
                  {
                        path:'addPublisher',
                        element:<AdminPrivateRoute><AddPublisher></AddPublisher></AdminPrivateRoute>
                  },
                  
            ]
      }
    ]);