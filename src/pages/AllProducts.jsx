import { useEffect, useState } from "react";
import SingleProduct from "../components/home/SingleProduct";


function AllProducts( ) {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/shoes")
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setProducts(data))

    },[])



    return (
        <div>
           <h1 className="text-5xl font-bold text-center">All Products</h1>
        <div className="my-16 flex flex-wrap gap-5">
        {
            products.map((shoe)=>
            <SingleProduct key={shoe.id} shoe={shoe}></SingleProduct>
            )
        }

        </div>

        </div>
    );
}

export default AllProducts;