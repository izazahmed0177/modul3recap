// import React from 'react'

import axios from "axios";
import useAuth from "../../hooks/useAuth"

export default function GoogleLogin() {

    const {googleLogin}=useAuth();

    const handleGoogleSignIn=()=>{
      const token=localStorage.getItem('token')
        googleLogin().then((data)=>{
          // console.log(data);
          if (data?.user?.email) {
            const userInfo={
              email:data?.user?.email,
              name:data?.user?.displayName,
              image:data?.user?.photoURL
            }

            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }


            axios.post("http://localhost:5000/user", userInfo,{
              headers: headers
            }).then((data) => {
              // console.log(data?.token);
              // console.log(data);
              // console.log(data?.data);
              // console.log(data?.data?.token);
              localStorage.setItem('token',data?.data?.token)
              // console.log(response.status, response.data);
            });
            // }).then((response) => {
            //   console.log(response.status, response.data);
            // });



            // await fetch("http://localhost:5000/user",{
            //   method:"POST",
            //   headers:{
            //     "Content-type":"application/json"
            //   },
            //   body:JSON.stringify(userInfo)
    
            // })
            // .then((res)=>res.json()) 
            // .then((data)=>{
            //   console.log(data)
            //   toast.success(" Add Successful")
            // 
            // }) 

          }
        })
    }


  return (
    <div>
    {/* <button onClick={handleGoogleSignIn} className="btn w-full">
        <div className="flex items-center gap-2">
        <FcGoogle size={24}></FcGoogle>
            <p>Google</p>
        </div>
    </button> */}

    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>





      
    </div>
  )
}
