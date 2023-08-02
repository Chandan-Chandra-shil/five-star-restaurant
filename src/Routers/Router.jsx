import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";


export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element:<Home/>

      },
      {
        path: "/ourMenu",
        element:<OurMenu/>
      }
    ]


  }
])

