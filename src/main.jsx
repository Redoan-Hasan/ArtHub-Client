import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home';
import Root from './Components/Root';
import Login from './Components/Login';
import Register from './Components/Register';
import AddCraft from './Components/AddCraft';
import AuthProvider from './Components/AuthProvider';
import AllCraftList from './Components/AllCraftList';
import ViewDetails from './Components/ViewDetails';
import MyCraftList from './Components/MyCraftList';
import UpdateExistingCraft from './Components/UpdateExistingCraft';
import PrivateRoute from './Components/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/craftsCards")
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element: <Register />
      },
      {
        path: '/addCraft',
        element: <PrivateRoute><AddCraft /></PrivateRoute>
      },
      {
        path:'/allCraftList',
        element: <AllCraftList/>,
        loader: () => fetch("http://localhost:5000/craftsCards")
      },
      {
        path:'/viewDetails/:id',
        element: <PrivateRoute><ViewDetails/></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/viewDetails/${params.id}`)
      },
      {
        path:'/myCraftList/:email',
        element:<PrivateRoute><MyCraftList /></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/myCraftList/${params.email}`)
      },
      {
        path: '/updateExistingCraft/:id',
        element: <PrivateRoute><UpdateExistingCraft /></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/updateExistingCraft/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
