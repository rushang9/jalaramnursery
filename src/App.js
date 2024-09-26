import React from "react"
import { Link } from 'react-router-dom';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import NavigationBar from "./navbar/navbar"

import Home from "./navbar/home";
import LOgin from "./navbar/Login";
import About from "./navbar/About";





function App() {

  const Routing = createBrowserRouter([
    {
      path : "/",
      element :<><NavigationBar /> <Home /> </>

    },
    {
      path : "/Login",
      element : <><NavigationBar /> <LOgin /> </>

    },

    {
      path : "/About",
      element : <><NavigationBar /> <About /> </>

    }
  ])

  return <>
    
    <RouterProvider router={Routing} />
  </>
}

export default App
