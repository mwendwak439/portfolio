import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Project from './pages/project.jsx'
import Contact from './pages/contact.jsx'
import Skills from './pages/skills.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const rout=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/home',
    element:<Home/> },
 {path:'/project',
    element:<Project/> },
  {path:'/contact',
    element:<Contact/>},
    {path:'/skills',
      element:<Skills/> }
  
]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout} />
  </StrictMode>,
)
