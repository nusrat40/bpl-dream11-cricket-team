import { useEffect, useState } from 'react';
import '../App.css'
import Available from './Available';
import Selected from './Selected';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const CardContainer = ({handleIsActive,isActive,coin,setCoin}) => {

    const [players,setPlayers]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])


    const [selectedPlayers,setSelectedPlayer]=useState([]);
    const maxPlayer =6;


    const handleSelectedPlayer = player =>{

        const isExist = selectedPlayers.find(previousPlayer=>previousPlayer.playerId === player.playerId)

        if(coin < player.biddingPrice)
        {
            toast.error("Not enough money to buy this player.");
            return;
        }

        if(isExist){
            toast.error("Player already selected");
            return;
        }

        if(selectedPlayers.length >= maxPlayer){
            toast.error("Can not add player");
            return;
        }
        setSelectedPlayer([...selectedPlayers,player]);
        setCoin(coin-player.biddingPrice);
        toast.success('Congrats!!Player is now in your team');


    }

    const handleRemovePlayer =(id)=>{
        const remainingPlayer = selectedPlayers.filter(p=>p.playerId !== id);
        setSelectedPlayer(remainingPlayer);
        toast.info("Player removed");
        
    }

    const [view,setView]=useState("available");
    

    const handleView=(v)=>{
        if(v === "available")
        {
            setView('available');
            
        }
        else{
            setView("selected")
        }
        
    }

    
    return (
       <div className='mb-40'>
         <div className="flex justify-between">
            <h2 className='text-xl font-bold'>{view === 'available' ? 'Available Players':`Selected Players: (${selectedPlayers.length}/6)` }</h2>
            <div className="flex gap-4">
                <button onClick={()=>{handleIsActive("available");handleView("available");}} className={`${isActive.available?"btn active":"btn"}`}>Available</button>
                <button onClick={()=>{handleIsActive("selected");handleView("selected");}} className={`${isActive.available?"btn":"btn active"}`}>Selected {selectedPlayers.length}</button>
            </div>
            
        </div>

        {isActive.available?<Available players={players} handleSelectedPlayer={handleSelectedPlayer} coin={coin}></Available>:
        <Selected selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} handleIsActive={handleIsActive}></Selected>}



       </div>
        
    );
};

CardContainer.propTypes={
    handleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    coin:PropTypes.number
}

export default CardContainer;