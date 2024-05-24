// import React from 'react'

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleProductCardDashboard({shoe}) {
    // eslint-disable-next-line react/prop-types
    const {id, title ,brand,price,description,image_url}=shoe;
    console.log(id); 

    const hendleDelete=async()=>{
        await fetch(`http://localhost:3000/shoes/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))

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

      <Link to={`/products/${id}`} className="">See Detalis</Link>
    </button>
    <button className="btn bg-green-600 text-white">

      <Link to={`/products/${id}`} className="">Edit</Link>
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
