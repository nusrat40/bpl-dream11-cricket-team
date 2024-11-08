import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import CardContainer from './Components/CardContainer';
import Footer from './Components/Footer';
import { toast } from 'react-toastify';


function App() {

  const [coin,setCoin]=useState(0);

  const handleCoinIncrease =(c)=>{
     c =15000000;
    setCoin(coin+c);
    toast.success("Credit added to your account");

  }

  const [isActive,secIsActive]=useState({
    available:true,
    status:'active'
  })

  const handleIsActive = (status)=>{
    if(status == "available")
    {
      secIsActive({
        available:true,
        status:'active'
      })
    }
    else{
      secIsActive({
        available:false,
        status:'active'
      })
    }
  }

  

  return (
   <div >

    <div className='container mx-auto md:px-20 px-4'>
            {/* Header section */}
    <Header coin={coin} ></Header>

       {/* Banner section */}
     <Banner handleCoinIncrease={handleCoinIncrease} ></Banner>

     {/* Card Container */}
    <CardContainer handleIsActive={handleIsActive} isActive={isActive} coin={coin} setCoin={setCoin}></CardContainer>
    </div>

    {/* Footer */}
    <Footer></Footer>
   </div>
  )
}

export default App
