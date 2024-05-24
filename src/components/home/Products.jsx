

import SingleProduct from "./SingleProduct";


// eslint-disable-next-line react/prop-types
export default function Products({data}) {
  console.log(data);
  return (
    <div>
    
    <div>

    <h1 className="my-8 text-2xl text-center font-bold">Our Products</h1>
    </div>
    <div className="flex gap-2 px-6 justify-center items-center">
    {/* <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct>
    <SingleProduct></SingleProduct> */}

    {
      
      // eslint-disable-next-line react/prop-types
      /* data.map((shoe)=>(
        <SingleProduct key={shoe.id} shoe={shoe}></SingleProduct>
      )) */

    }

    {
      // eslint-disable-next-line react/prop-types
      data.slice(0, 3).map((shoe)=>(
        <SingleProduct key={shoe.id} shoe={shoe}></SingleProduct>
      ))
    }

    



    </div>
   
      
    </div>
  )
}
