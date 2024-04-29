import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './components/Registration.jsx';
import LogIn from './components/LogIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Home from './components/Home.jsx';
import AddArtCraft from './components/AddArtCraft.jsx';
import About from './components/About.jsx';
import AllArtCrafts from './components/AllArtCrafts.jsx';
import MyArtCrafts from './components/MyArtCrafts.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/log-in',
        element: <LogIn></LogIn>
      },
      {
        path: '/add-art-craft',
        element: <AddArtCraft></AddArtCraft>
      },
      {
        path: '/all-art-crafts',
        loader: () => fetch('http://localhost:5000/craft'),
        element : <AllArtCrafts></AllArtCrafts>
      },
      {
        path : '/my-art-crafts',
        loader: () => fetch('http://localhost:5000/craft'),
        element : <MyArtCrafts></MyArtCrafts>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
