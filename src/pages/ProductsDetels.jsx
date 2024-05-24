// import React from 'react'

import { useLoaderData } from "react-router-dom"

export default function ProductsDetels() {
    const shoe=useLoaderData()

    const {id, title ,brand,price,description,image_url}=shoe;
    console.log(id);
  return (
    <div>
      {/* <h>{shoe.id}</h> */}
      <h1 className="text-5xl text-center font-bold">{title}</h1>
      <div className=" flex  items-center">

      <img className="h-[600px]  " src={image_url} alt="product image"></img>
      </div>
      <h3 className="text-2xl font-semibold">{price} $$</h3>
      <h3 className="text-xl font-semibold">{brand}</h3>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  )
}
