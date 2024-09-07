import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './assets/routes/Home.jsx'
import ErrorPage from './assets/routes/Error.jsx';
import Cadastro from './assets/routes/Cadastro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/start-projet/",
        element: <Home />,
      },
     // {
     //   path: "/start-projeto/cadastro",
     //   element: <Cadastro />,
    //  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)