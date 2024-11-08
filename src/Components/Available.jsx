import PropTypes from 'prop-types';
import Player from './Player';

const Available = ({players,handleSelectedPlayer}) => {
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            {
                players.map(player =><Player key={player.playerId} player={player} handleSelectedPlayer={handleSelectedPlayer}></Player>)
            }
        
        
        </div>
    );
};

Available.propTypes={
    players:PropTypes.array,
    handleSelectedPlayer:PropTypes.func
}

export default Available;