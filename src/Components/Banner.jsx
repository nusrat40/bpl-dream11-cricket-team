import '../App.css'
import banner from '../assets/images/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({handleCoinIncrease}) => {
    return (
       <div  className='banner-image min-h-[500px] bg-black rounded-xl bg-no-repeat bg-cover text-white flex flex-col justify-center items-center gap-4 mb-10 text-center'>
        <img src={banner} alt="" />
        <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-gray-300'>Beyond Boundaries Beyond Limits</p>
        <button onClick={handleCoinIncrease} className='btn bg-[#E7FE29] font-bold'>Claim Free Credit</button>

       </div>
    );
};

Banner.propTypes={
    handleCoinIncrease:PropTypes.func
}

export default Banner;