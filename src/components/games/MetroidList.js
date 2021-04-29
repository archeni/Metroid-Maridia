import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../modules/GamesManager';
import { useHistory } from "react-router-dom";
import { MetroidCard } from './MetroidCard';

export const MetroidList = () => {
  const [games, setGames] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  let history = useHistory()
  
  const getGames = () => {
    return getAllGames().then(game => {
      setGames(game)
      setSearchResults(game)
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

  useEffect(() => {
    getGames()
  }, []);
  

  return (
    <section className='games'>
      <h1 className='gameTitle'>Metroid Library</h1>
      <form className='gameForm'>
        <input placeholder='Search' onChange={handleSearch}></input>
      </form>
      <div className='gameList'>
        {searchResults.map(game =>
          <MetroidCard
            key={game.id}
            gameCard={game}
        />)}
      </div>
    </section>
  )
}