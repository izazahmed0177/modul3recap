// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function SingleProduct({shoe}) {
  // eslint-disable-next-line react/prop-types
  const {id, title ,brand,price,description,image_url}=shoe;
  console.log(id);
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      
    </div>
  )
}
