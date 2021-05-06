import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../modules/GamesManager';
import { MetroidCard } from './MetroidCard';
import { addMyGame, getAllMyGames } from '../../modules/MyGamesManager';

export const MetroidList = () => {
  const [games, setGames] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [library, setLibrary] = useState([]);
  const libraryGames = [];
  const currentUser = parseInt(sessionStorage.getItem("metroid_user"));

  const getGames = () => {
    return getAllGames().then(game => {
      setGames(game)
      setSearchResults(game)
    })
  }
  
  const getMyGames = () => {
    return getAllMyGames().then(myGame => {
      setLibrary(myGame)
    })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    let gameInput = event.target.value

    if (gameInput.length > 0) {

      let searchMatch = games.filter(game => game.name.toLowerCase().includes(gameInput.toLowerCase()))
      setSearchResults(searchMatch)
    } else {
      setSearchResults(games)
    }
  }

  const handleAddGame = (id) => {
    const newMyGame = {
      userId: currentUser,
      gameId: parseInt(id),
      privateRating: 0
    }

    if(library.find(personalGame => personalGame.userId === currentUser && personalGame.gameId === parseInt(id))) {
      alert("You already have this game added! Pleas try adding another.")
    } else {
      addMyGame(newMyGame)
      alert("Added Game to Your Library!")
      getMyGames()
    }
    
  }
  

  useEffect(() => {
    getGames()
    getMyGames()
  }, []);
  
  libraryGames.push(library)

  return (
    <section className='games'>
      <h1 className='gameTitle'>Metroid Library</h1>
      <form className='gameForm'>
        <input placeholder='Search' onChange={handleSearch}></input>
      </form>
      <div className='gameList'>
        {searchResults.map(game => {
          let dividingNumber = 0
          let total = 0
          libraryGames[0].filter(personalGame => {
            if(personalGame.gameId === game.id) {
              ++dividingNumber
              total += personalGame.privateRating
              return personalGame
            }
          })
          let finalRating = 0
          if(total > 0) {
            finalRating = Math.round(total/dividingNumber)
          }
          return <MetroidCard
              key={game.id}
              gameCard={game}
              handleAddGame={handleAddGame}
              finalRating={finalRating}
            />
        })}
      </div>
    </section>
  )
}