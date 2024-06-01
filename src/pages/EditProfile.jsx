// import React from 'react'

import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom"

export default function EditProfile() {
    const data=useLoaderData();
    console.log(data);

    const handleProfile=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const age=form.age.value;
        const mobileNumber=form.mobileNumber.value;
        const address=form.address.value;
        const image=form.image.value;

        const userData={
            name,email:data?.email,age,mobileNumber,address,image
        }

        const editData=await axios.patch(`http://localhost:5000/user/${data?.email}`,userData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
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

    }




  return (
    <div>
    <h1 className="text-3xl p-2 text-center">Edit Profile</h1>

    <form onSubmit={handleProfile} action="" className="flex flex-col gap-y-6">
    <div className="flex flex-col">
        <label htmlFor="">User Name</label>
        <input className="py-2 px-1 bg-slate-300" type="text" name="name" defaultValue={data?.name} ></input>
    </div>
    <div className="flex flex-col">
        <label htmlFor="">User email</label>
        <input className="py-2 px-1 bg-slate-300"  type="text" name="name"value={data?.email} disabled ></input>
    </div>
    <div className="flex flex-col">
        <label htmlFor="">User Age</label>
        <input className="py-2 px-1 bg-slate-300"  type="text" name="age" defaultValue={data?.age} ></input>
    </div>
    <div className="flex flex-col">
        <label htmlFor="">User Mobile</label>
        <input className="py-2 px-1 bg-slate-300"  type="text" name="mobileNumber" defaultValue={data?.mobileNumber} ></input>
    </div>
    <div className="flex flex-col">
        <label htmlFor="">User Address </label>
        <input className="py-2 px-1 bg-slate-300"  type="text" name="address" defaultValue={data?.address} ></input>
    </div>
    <div className="flex flex-col">
        <label htmlFor="">User Image </label>
        <input className="py-2 px-1 bg-slate-300"  type="text" name="image" defaultValue={data?.image}></input>
    </div>

    <button className="btn btn-primary">Update Profile</button>


    </form>
      
    </div>
  )
}
