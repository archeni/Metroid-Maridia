import React from 'react';
import './Metroid.css'

export const MetroidCard = ({gameCard, handleAddGame, ratingNumber}) => {
  const dividingNumber = ratingNumber.length
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = ratingNumber.reduce(reducer);
  const finalRating = total/dividingNumber

  return (
    <div className='gameCard'>
      <h4 className={gameCard.name}></h4>
      <img className='gameImg' src={gameCard.picture} />
      <p className='gameDescription'>{gameCard.description}</p>
      <section className='gameRating'>
        <div className='publicRating'>{finalRating}/10</div>
        <div className='privateRating'></div>
        <button className='addGameButton' type='button' onClick={() => handleAddGame(gameCard.id)}>Add Game</button>
      </section>
    </div>
  )
}