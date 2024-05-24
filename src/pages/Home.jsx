import { useLoaderData } from "react-router-dom"
import Accordion from "../components/home/Accordion"
import Banner from "../components/home/Banner"
import Products from "../components/home/Products"

// import React from "react"
const Home = () => {
    const data=useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            {/* <h1 className="text-xl font-bold">this is home page</h1> */}
            <Products data={data}></Products>
            <Accordion></Accordion>


        </div>
    )
}

export default Home