import React from 'react';

export const MetroidCard = ({gameCard}) => {
  return (
    <div className='gameCard'>
      <img className='gameImg' src={gameCard.picture} />
      <section className='gameRating'>

      </section>
    </div>
  )
}