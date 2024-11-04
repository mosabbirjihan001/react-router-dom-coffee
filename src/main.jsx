import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layouts/MainLayout';
import Home from './components/Pages/Home';
import Coffees from './components/Pages/Coffees';
import DashBoard from './components/Pages/DashBoard';
import CoffeeCards from './components/CoffeeCards';
import CoffeeDetails from './components/Pages/CoffeeDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch ('../categories.json'),
        children : [
          {
            path : '/',
            element : <CoffeeCards></CoffeeCards>,
            loader : () => fetch ('../coffees.json'),
          },
          {
            path : '/category/:category',
            element : <CoffeeCards></CoffeeCards>,
            loader : () => fetch ('../coffees.json'),
          },
        ]
      },
      {
        path : '/coffees',
        element : <Coffees></Coffees>,
        loader : () => fetch ('../coffees.json'),
      },
      {
        path : '/dashboard',
        element : <DashBoard></DashBoard>,
      },
      {
        path : '/coffee/:id',
        element : <CoffeeDetails></CoffeeDetails>,
        loader : () => fetch ('../coffees.json'),
      },
     
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
