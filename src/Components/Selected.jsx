
import SelectedPlayer from "./SelectedPlayer";
import PropTypes from 'prop-types';


const Selected = ({selectedPlayers,handleRemovePlayer,handleIsActive}) => {

    
    return (
        <div className="mt-6 space-y-4">
            {
                selectedPlayers.map((selectedPlayer,index) =><SelectedPlayer key={index} selectedPlayer={selectedPlayer} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)
            }
            <button onClick={()=>handleIsActive("available")} className="btn bg-[#E7FE29] font-bold">Add More Player</button>
        </div>
    );
};

Selected.propTypes={
    selectedPlayers:PropTypes.array,
    handleRemovePlayer:PropTypes.func,
    handleIsActive:PropTypes.func
    
}

export default Selected;