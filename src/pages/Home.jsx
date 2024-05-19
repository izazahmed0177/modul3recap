import Accordion from "../components/home/Accordion"
import Banner from "../components/home/Banner"
import Products from "../components/home/Products"

// import React from "react"
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <h1 className="text-xl font-bold">this is home page</h1> */}
            <Products></Products>
            <Accordion></Accordion>


        </div>
    )
}

export default Home