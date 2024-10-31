import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import App from "./App.jsx";
import Favorites from "@/pages/Favorites.jsx";
import Statistics from "@/pages/Statistics.jsx";
import Books from "@/pages/Books.jsx";
import Settings from "@/pages/Settings.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/books",
    element: <Books/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/favorites",
    element: <Favorites/>
  },
  {
    path: "/statistics",
    element: <Statistics/>
  },
  {
    path: "/settings",
    element: <Settings/>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
