// import React from 'react'

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function EditProducts() {
  const shoe=useLoaderData();

  const [title,setTitle]=useState(shoe.title)
  const [ brand,setBrand]=useState(shoe.brand)
  const [price,setPrice]=useState(shoe.price)
  const [description,setDescription]=useState(shoe.description)
  const [image_url,setImage_url]=useState(shoe.image_url)
  // const [id,setId]=useState(shoe.id)




  // console.log(shoe);
    const handleSubmit=async(e)=>{
      const token=localStorage.getItem('token')
        e.preventDefault();
        const form=e.target;
        // const id=form.id.value;
        const title=form.title.value;
        const brand=form.brand.value;
        const price=form.price.value;
        const description=form.description.value;
        const image_url=form.image_url.value;

        // console.log(id,title,price,brand,description,image_url);

        // const data={id,title,brand,price,description,image_url}
        const data={title,brand,price,description,image_url}
        // console.log(data);

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }

        const editData=await axios.patch(`http://localhost:5000/shoes/${shoe._id}`,data,
        {
          // headers: {
          //   'Content-Type': 'application/json',
          //   authorization:`Bearer ${token}`
          // }
          headers:headers
        }
        ).then(
          (response) => {
            console.log(response);
            toast.success("üser Update dan")
            console.log(response.status === 200, '🚀 User Updated');
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((err) => console.log(err));

        console.log(editData);



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
        <input onChange={(e)=>setTitle(e.target.value)} value={title} 
        className="bg-gray-200 p-4 w-full border border-black rounded-lg" 
        type="text" name="title" placeholder="Title"/>
       </div>
       <div className="mt-2">
        <input onChange={(e)=>setBrand(e.target.value)} value={brand} 
        className="bg-gray-200 p-4 w-full border border-black rounded-lg"
         type="text" name="brand" placeholder="Brand"/>
       </div>
       <div className="mt-2">
        <input onChange={(e)=>setPrice(e.target.value)} value={price} 
         className="bg-gray-200 p-4 w-full border border-black rounded-lg"
         type="number" name="price" placeholder="Price"/>
       </div>
       <div className="mt-2">
        <input onChange={(e)=>setDescription(e.target.value)} value={description} 
        className="bg-gray-200 p-4 w-full border border-black rounded-lg"
        type="text" name="description" placeholder="Description"/>
       </div>
       <div className="mt-2">
        <input onChange={(e)=>setImage_url(e.target.value)} value={image_url} 
         className="bg-gray-200 p-4 w-full border border-black rounded-lg" 
        type="text" name="image_url" placeholder="Image Url"/>
       </div>
       {/* <div className="mt-2">
        <input onChange={(e)=>setId(e.target.value)} value={id} 
         className="bg-gray-200 p-4 w-full border border-black rounded-lg" 
        type="text" name="id" placeholder="ID"/>
       </div> */}

       <div className="mt-2 flex justify-center items-center">
       <input className="btn mt-4 btn-info" type="submit" value="Edit Product" />

       </div>


       </form>

       </div>
    </div>
  )
}
