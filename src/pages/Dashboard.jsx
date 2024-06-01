// import React from 'react'

import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom";

// import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const {user}=useAuth();
  const [userInfo,setUserInfo]=useState();
  // const {logOut,user,}=useAuth();
// console.log(user.email);
useEffect(()=>{
  fetch(`http://localhost:5000/user/${user?.email}`)
  .then((res)=>res.json())
  .then((data)=>setUserInfo(data))
  
},[user])

console.log(userInfo);

  return (
    <div>

    <div className="flex justify-between mb-7">
    <h1 className="text-3xl">Profile Information</h1>
    <Link to={`dashboard/profile/edit/${userInfo?._id}`} className="btn btn-neutral">Edit Profile</Link>

    </div>

    <div>


    <h1>{userInfo?.name}</h1>
    <h1>{userInfo?.email}</h1>
    </div>

    
      
    </div>
  )
}
