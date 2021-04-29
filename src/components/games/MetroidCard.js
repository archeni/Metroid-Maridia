import React from 'react';
import './Metroid.css'

export const MetroidCard = ({gameCard}) => {
  return (
    <div className='gameCard'>
      <h4 className={gameCard.name}></h4>
      <img className='gameImg' src={gameCard.picture} />
      <p className='gameDescription'>{gameCard.description}</p>
      <section className='gameRating'>
        <div className='publicRating'></div>
        <div className='privateRating'></div>
      </section>
    </div>
  )
}