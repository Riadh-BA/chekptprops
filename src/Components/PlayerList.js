import React from 'react'
import Players from './Players'
import Player from './Player'

const PlayerList = () => {
  return (
    <div>
        {Players.map(joueur=><Player joueur={joueur} key={joueur.id} />)}
    </div>
  )
}



export default PlayerList