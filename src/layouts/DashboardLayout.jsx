// import React from 'react'

import {  NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
//     <div>

// <div className="drawer">
//   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Page content here */}

//     <Outlet></Outlet>



//     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
//   </div> 
//   <div className="drawer-side">
//     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//       {/* Sidebar content here */}
//       <li><a>Sidebar Item 1</a></li>
//       <li><a>Sidebar Item 2</a></li>
      
//     </ul>
//   </div>
// </div>
      
//     </div>





<div className="grid grid-cols-12">
<div className="col-span-2 bg-gray-300 min-h-screen p-12">
  <ul>
    <li className="border border-black p-4 text w-full">
      {/* <Link to={""}>Dashboard</Link> */}
      <NavLink   style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
  
  to={''}>Dashboard</NavLink>
    </li>
    <li className="border border-black p-4 text w-full">
      <NavLink  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} 
  
  to={"dashboard/all-products"}>All Products</NavLink>
    </li>
    <li className="border border-black p-4 text w-full">
      <NavLink   style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
  
   to={"dashboard/add-products"}>Add Product</NavLink>
    </li>
    <li className="border border-black p-4 text w-full">
      <NavLink to={"/"}>Home</NavLink>
    </li>
  </ul>
</div>
<div className="col-span-10 p-20">
  <Outlet />
</div>
</div>

  )
}
