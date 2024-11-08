import logo from '../assets/images/logo.png'
import coinLogo from '../assets/images/coin.png'
import PropTypes from 'prop-types';

const Header = ({coin}) => {
    return (
        <div className='flex justify-between navbar mb-4 '>
            <div>
               <img src={logo} alt="" />
            </div>
            <div className='flex'>
                <ul className='menu menu-horizontal text-gray-500 hidden md:flex'>
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                <button className='btn bg-transparent'>{coin} Coin <img src={coinLogo} alt="" /> </button>
            </div>
        </div>
    );
};


Header.propTypes={
    coin:PropTypes.number
}

export default Header;