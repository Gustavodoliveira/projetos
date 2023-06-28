import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//pag

import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Login from './routes/Login';
import Register from './routes/Register';
import Sobre from './routes/sobre';

const  router = createBrowserRouter ([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/produtos",
                element: <Produtos />
            }, 
            {
                path: "/login",
                element: <Login />
            },
           {
                path: "/register",
                element: <Register/>
            },
            {
               path: "/sobre",
             element: <Sobre />
            } 
        ]
    }
])

ReactDOM.createRoot(document.getElementById("head")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)


