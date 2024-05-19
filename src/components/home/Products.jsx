// import React from 'react'

import SingleProduct from "./SingleProduct";

export default function Products() {
  return (
    <div>
    
    <div>

    <h1 className="my-8 text-2xl text-center font-bold">Our Products</h1>
    </div>
    <div className="flex gap-2">
    <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct>
    </div>
   
      
    </div>
  )
}
