import Player from "./Player"
import Players from "./Players"


const PlayersList = () => {
  return (
   
  <>
    <h1 style={{ fontWeight: "bold" }} className="text-center text-danger text-capitalize my-5">FIFA player cards</h1>
       <div  >
      {Players.map((player) => (
        <Player key={player.id} {...player} /> // boucle sur players par leurs id
      ))}
    </div></>
  )
}

export default PlayersList
