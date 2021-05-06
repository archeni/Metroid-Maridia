import React from 'react';
import './MyLibrary.css'

export const MyLibraryCard = ({libraryGame, gameCard, handleDeleteGame, handleRateGame}) => {
  return (
    <div id={libraryGame.id} className='gameCard'>
      <h4 className='gameName'>{gameCard.name}</h4>
      <img className='gameImg' src={gameCard.picture} alt='my metroid game'/>
      <p className='gameDescription'>{gameCard.description}</p>
      <section className='gameRating'>
        <div className='publicRating'>{libraryGame.privateRating}/10</div>
        <div className='privateRating'></div>
        <button className='deleteGameButton' type='button' onClick={() => handleDeleteGame(libraryGame.id)}>Delete Game</button>
        <button className='rateGameButton' type='button' onClick={() => handleRateGame(libraryGame.id)}>Rate Game</button>
      </section>
    </div>
  )
}