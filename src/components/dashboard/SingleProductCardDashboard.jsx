// import React from 'react'

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleProductCardDashboard({shoe,onDelete}) {
    // eslint-disable-next-line react/prop-types
    const {_id, title ,brand,price,description,image_url}=shoe;
    console.log(_id); 

    const hendleDelete=async()=>{
      const token=localStorage.getItem('token')
        await fetch(`http://localhost:5000/shoes/${_id}`,{
            method:"DELETE",
            headers:{
              "Content-type":"application/json",
              authorization: `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then(()=>toast.success("product Deleted"))
        onDelete(_id)

    }




  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
   */}
   {
    !image_url ?
    <>
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    </>
    :
    <figure><img src={image_url} /></figure>
   }


  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold text-yellow-700">{price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">

    <button className="btn bg-blue-600 text-white">

      <Link to={`/products/${_id}`} className="">See Detalis</Link>
    </button>
    <button className="btn bg-green-600 text-white">

      <Link to={`edit/${_id}`} className="">Edit</Link>
    </button>
    <button onClick={hendleDelete} className="btn bg-red-600 text-white">

      Delete
    </button>
    </div>
  </div>
</div>
      
    </div>
  )
}
