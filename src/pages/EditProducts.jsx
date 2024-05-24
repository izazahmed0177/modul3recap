// import React from 'react'

import { useLoaderData } from "react-router-dom";

export default function EditProducts() {
  const shoe=useLoaderData();
  console.log(shoe);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const id=form.id.value;
        const title=form.title.value;
        const brand=form.brand.value;
        const price=form.price.value;
        const description=form.description.value;
        const image_url=form.image_url.value;

        // console.log(id,title,price,brand,description,image_url);

        const data={id,title,brand,price,description,image_url}
        console.log(data);



        // // POST REQUESR
        // await fetch("http://localhost:3000/shoes",{
        //   method:"POST",
        //   headers:{
        //     "Content-type":"application/json"
        //   },
        //   body:JSON.stringify(data)

        // })
        // .then((res)=>res.json()) 
        // .then((data)=>{
        //   console.log(data)
        //   form.reset();
        // }) 



    }


  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit a Product</h1>
       <div className="my-15">
       <form onSubmit={handleSubmit}>

       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="text" name="title" placeholder="Title"/>
       </div>
       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="text" name="brand" placeholder="Brand"/>
       </div>
       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="number" name="price" placeholder="Price"/>
       </div>
       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="text" name="description" placeholder="Description"/>
       </div>
       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="text" name="image_url" placeholder="Image Url"/>
       </div>
       <div className="mt-2">
        <input className="bg-gray-200 p-4 w-full border border-black rounded-lg" type="text" name="id" placeholder="ID"/>
       </div>

       <div className="mt-2 flex justify-center items-center">
       <input className="btn mt-4 btn-info" type="submit" value="Add Product" />

       </div>


       </form>

       </div>
    </div>
  )
}
