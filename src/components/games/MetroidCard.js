import React from 'react';
import './Metroid.css'

export const MetroidCard = ({gameCard, handleAddGame}) => {
  return (
    <div className='gameCard'>
      <h4 className={gameCard.name}></h4>
      <img className='gameImg' src={gameCard.picture} />
      <p className='gameDescription'>{gameCard.description}</p>
      <section className='gameRating'>
        <div className='publicRating'>0/10</div>
        <div className='privateRating'></div>
        <button className='addGameButton' type='button' onClick={() => handleAddGame(gameCard.id)}>Add Game</button>
      </section>
    </div>
  )
}