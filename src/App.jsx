
// import './App.css'
import About from './pages/About';

import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    <>
     {/* <div className='container'>
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia aut expedita eos quia id, dignissimos recusandae
         voluptatem illum tempora accusamus magnam non similique eum ipsum in! Incidunt, nisi natus?</p>
     </div>


     <div className='flex gap-4'>
      <div className='p-10 border border-rose-600'>
        01
      </div>
      <div className='p-10 border border-rose-600'>
        01
      </div>
      <div className='p-10 border border-rose-600'>
        01
      </div>
     </div> */}


     <Navbar></Navbar>
    <Home></Home>
     {/* <Login></Login>
     <About></About> */}

     <Footer></Footer>




    </>
  )
}

export default App
