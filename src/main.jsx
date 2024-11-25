import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicesPage from './pages/services';

import Projectspage from './pages/projects';
import Singleproject from './pages/singleproject';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
    ,
  }, {
    path: "/services",
    element:<ServicesPage />
    ,
  }, {
    path: "/projects",
    element:<Projectspage />
    ,
  },{
    path: "/project/:id",
    element:<Singleproject />
    ,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
