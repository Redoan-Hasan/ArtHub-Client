/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/login' />
    }
};

export default PrivateRoute;