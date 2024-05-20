// import React from 'react'

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingSpanner from "../../components/LoadingSpanner";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({children}) {
 const {user,loading}=useAuth();

 const location=useLocation()

 if (loading) {
    return <LoadingSpanner></LoadingSpanner>
 }



 if (user) {
    return children;
 }
 return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
}
