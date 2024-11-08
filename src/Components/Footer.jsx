import logo from '../assets/images/logo-footer.png'
import '../App.css'

const Footer = () => {
    return (
        <div>
          {/* News Letter section */}
          <div className='border-2 flex justify-center items-center  md:absolute z-10 p-6 rounded-xl md:w-[1200px] left-40 -mt-20 '>

            <div className='bg-gradient-to-tr from-sky-200 from-0% via-transparent to-yellow-300 bg-white text-center space-y-4 p-8 md:w-[1190px] rounded-xl'>
              <h1 className='text-2xl font-bold'>Subscribe to our Newsletter</h1>
              <p className='text-gray-500 font-bold'>Get the latest updates and news right in your inbox!</p>
              <div className='flex gap-4 justify-center items-center'>
              <input type="text"  placeholder="Enter your email" className="input input-bordered" />
        <button className="btn bg-gradient-to-r from-pink-300 from-0% to-amber-300 join-item">Subscribe</button>
              </div>

            </div>

          </div>


          {/* Footer section */}
          <div className='bg-black space-y-8 md:pt-44 md:relative'>
            <div className='flex justify-center items-center'>
                <img className=' mt-6' src={logo} alt="" />
            </div>
            <footer className=" md:flex justify-evenly  text-white p-4">

            <div>
                <h3 className="text-xl font-bold">About Us</h3>
                <p className="w-2/5 text-gray-300">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
  
  <div>
    <h6 className="text-xl font-bold">Quick Links</h6>
    <ul className="list-disc p-2 text-gray-300">
    <li>Home</li>
    <li>Services</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
  </div>
  <div className="space-y-2">
    <h6 className="text-xl font-bold">Subscribe</h6>
    <p className="text-gray-300 w-2/3">Subscribe to our newsletter for the latest updates.</p>
      
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn bg-gradient-to-r from-pink-300 from-0% to-amber-300 join-item">Subscribe</button>
      </div>
    
  </div>
</footer>
<div className='text-gray-300 text-center  border-gray-600 border-t p-10'>
    <p>@2024 Your Company All Rights Reserved.</p>
</div>
        </div>


        </div>
    );
};

export default Footer;