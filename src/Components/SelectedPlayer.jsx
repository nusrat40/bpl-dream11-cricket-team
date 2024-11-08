import PropTypes from 'prop-types';

const SelectedPlayer = ({selectedPlayer,handleRemovePlayer}) => {
    const {image,name,battingType,playerId}=selectedPlayer;

    return (
        <div>
            <div className='border-2 flex justify-between items-center p-4 rounded-xl'>
                <div className='flex gap-3 items-center'>
                <div>
                    <img className='w-[90px] h-[90px] rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold'>{name}</p>
                    <p className='text-gray-500'>{battingType}</p>
                </div>
                </div>
                <div>
                <button onClick={()=>handleRemovePlayer(playerId)}><i className="fa-solid fa-trash-can text-red-500 "></i></button>
                </div>

            </div>
            
        </div>
    );
};

SelectedPlayer.propTypes={
    selectedPlayer:PropTypes.object,
    handleRemovePlayer:PropTypes.func
}

export default SelectedPlayer;