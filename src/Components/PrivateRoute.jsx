/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    
        return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;