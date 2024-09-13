import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './assets/routes/Home.jsx'
import ErrorPage from './assets/routes/Error.jsx';
import Cadastro from './assets/routes/Cadastro.jsx';
import Consulta from './assets/routes/Consulta.jsx';
import Import from './assets/routes/Import.jsx';
import Dados from './assets/routes/Dados.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Define a rota para Home como default para "/start-projeto/"
      },
      {
        path: "/start-projeto/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/start-projeto/consulta",
        element: <Consulta />,
      },
      {
        path: "/start-projeto/import",
        element: <Import />,
      },
      {
        path: "/start-projeto/dados",
        element: <Dados />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
