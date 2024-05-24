// import React from 'react'

import { useLoaderData } from "react-router-dom"

export default function ProductsDetels() {
    const shoe=useLoaderData()
    console.log(shoe);
  return (
    <div>
      <h>{shoe.id}</h>
    </div>
  )
}
