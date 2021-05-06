import React from 'react';
import './Metroid.css'

export const MetroidCard = ({gameCard, handleAddGame, finalRating}) => {
  return (
    <div id={gameCard.id} className='gameCard'>
      <h3 className='gameName'>{gameCard.name}</h3>
      <img className='gameImg' src={gameCard.picture} alt={gameCard.name}/>
      <p className='gameDescription'>{gameCard.description}</p>
      <section className='gameRating'>
        <div className='publicRating'>Rating: {finalRating}/10</div>
        <div className='privateRating'></div>
        <button className='addGameButton' type='button' onClick={() => handleAddGame(gameCard.id)}>Add Game</button>
      </section>
    </div>
  )
}