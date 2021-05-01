import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../modules/GamesManager';
import { useHistory } from "react-router-dom";
import { deleteMyGame, getAllMyGames } from '../../modules/MyGamesManager';
import { getAllUsers } from '../../modules/FriendsManager';
import { MyLibraryCard } from './MyLibraryCard';

export const LibraryList = () => {
  const [games, setGames] = useState([]);
  const [library, setLibrary] = useState([]);
  let history = useHistory();
  
  const sessionId = parseInt(sessionStorage.getItem('metroid_user'))
  
  const getGames = () => {
    return getAllGames().then(game => {
      setGames(game)
    })
  }
  const userGames = library.filter(game => {
    if(game.userId === sessionId) {
        return true
      }
    })
    
    const getMyGames = () => {
      return getAllMyGames().then(myGame => {
        setLibrary(myGame)
    })
  }
  
  const handleDeleteGame = (id) => {
    deleteMyGame(id)
    .then(() => getMyGames());
  }

  useEffect(() => {
    getGames()
    getMyGames()
  }, []);
  
  return (
    <section className='games'>
      <h1 className='gameTitle'>My Library</h1>
      <div className='gameList'>
        {userGames.map(game =>
          games.map(mainGame => {
            if (game.gameId === mainGame.id) {
              return <MyLibraryCard
                key={game.id}
                libraryGame={game}
                gameCard={mainGame}
                handleDeleteGame={handleDeleteGame}
            />}}

          ))}
      </div>
    </section>
  )
}