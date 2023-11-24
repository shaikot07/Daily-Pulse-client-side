import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import AllArticle from "../Pages/AllArticle/AllArticle";
import ArticleDetails from "../Pages/AllArticle/ArticleDEtiles/ArticleDetails";




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
                  path:'',
                  element:<Home></Home>
            },
            {
                  path:'allarticles',
                  element:<AllArticle></AllArticle>
            },
            {
                  path:'articledetils/:id',
                  element:<ArticleDetails></ArticleDetails>
            },
            {
                 path:'signup',
                 element:<SignUp></SignUp>
            },
        ]
      },
    ]);