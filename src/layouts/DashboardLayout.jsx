// import React from 'react'

import { Link, Outlet } from "react-router-dom";

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
      <Link to={"home"}>Dashboard</Link>
    </li>
    <li className="border border-black p-4 text w-full">
      <Link to={"all-products"}>All Products</Link>
    </li>
    <li className="border border-black p-4 text w-full">
      <Link to={"add-products"}>Add Product</Link>
    </li>
    <li className="border border-black p-4 text w-full">
      <Link to={"/"}>Home</Link>
    </li>
  </ul>
</div>
<div className="col-span-10 p-20">
  <Outlet />
</div>
</div>

  )
}
