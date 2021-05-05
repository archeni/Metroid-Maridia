import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../modules/GamesManager';
import { useHistory } from "react-router-dom";
import { MetroidCard } from './MetroidCard';
import { addMyGame, getAllMyGames } from '../../modules/MyGamesManager';

export const MetroidList = () => {
  const [games, setGames] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  let library = [];

  const getGames = () => {
    return getAllGames().then(game => {
      setGames(game)
      setSearchResults(game)
    })
  }

  const getMyGames = () => {
    return getAllMyGames().then(myGame => {
      library.push(myGame)
    })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    let gameInput = event.target.value

    if (gameInput.length > 0) {
      console.log(gameInput)

      let searchMatch = games.filter(game => {
          if (game.name.toLowerCase().includes(gameInput.toLowerCase())) {
              return true
          }
          
      })
      setSearchResults(searchMatch)
    } else {
      setSearchResults(games)
    }
  }

  const handleAddGame = (id) => {
    const newMyGame = {
      userId: parseInt(sessionStorage.getItem("metroid_user")),
      gameId: parseInt(id),
      privateRating: 0
    }

    addMyGame(newMyGame)
    alert("Added Game to Your Library!")
  }

  useEffect(() => {
    getGames()
    getMyGames()
  }, []);
  

  return (
    <section className='games'>
      <h1 className='gameTitle'>Metroid Library</h1>
      <form className='gameForm'>
        <input placeholder='Search' onChange={handleSearch}></input>
      </form>
      <div className='gameList'>
        {searchResults.map(game => {
          const ratingNumber = library.filter(personalGame => {
            if(personalGame.gameId === game.id) {
              return personalGame.privateRating
            }
          },
          console.log(ratingNumber),
          return <MetroidCard
            key={game.id}
            gameCard={game}
            handleAddGame={handleAddGame}
            ratingNumber={ratingNumber}
        />
        )})}
      </div>
    </section>
  )
}