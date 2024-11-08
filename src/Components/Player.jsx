import PropTypes from 'prop-types';

const Player = ({player,handleSelectedPlayer}) => {
    const {name,image,country,role,battingType,biddingPrice}=player;
    return (
        <div>
            <div>
                <div className="border-2 p-4 rounded-xl space-y-2">
                    <img src={image} alt="" />
                    <div className="flex gap-2 items-center">
                    <i className="fa-solid fa-user"></i>
                        <h2 className="text-xl font-bold">{name}</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-flag text-gray-500"></i>
                            <p className="text-gray-500">{country}</p>
                        </div>
                        <button className="btn text-gray-500">{role}</button>
                    </div>

                    <div className="space-y-2">
                    <p className="font-bold">Rating</p>

                    <div className="flex justify-between">
                    <div className="space-y-2">
                        <p className="font-bold">{battingType}</p>
                        <p className="font-bold">Price:{biddingPrice}</p>
                       </div>
                       <div className="space-y-2 text-center">
                        <p className="text-gray-500">{battingType}</p>
                        <button onClick={()=>handleSelectedPlayer(player)} className="btn">Choose Player</button>
                       </div>
                    </div>

                    
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes={
    player:PropTypes.object,
    handleSelectedPlayer:PropTypes.func
}

export default Player;