import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Page404 from './components/Page404'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404/> ,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
