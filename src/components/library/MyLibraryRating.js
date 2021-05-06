import React, { useState, useEffect } from "react";
import { editMyGame, getGameById } from "../../modules/MyGamesManager";
import "./MyLibraryRating.css";
import { useHistory, Link } from "react-router-dom"

export const LibraryEditForm = () => {
    const [games, setGame] = useState({ 
      privateRating: 0,
      });
    const [isLoading, setIsLoading] = useState(false);
    const libraryId = window.location.href.split("/")[4]
    const history = useHistory();

    const handleInputChange = (evt) => {
      const newRating = { ...games }
      let selectedVal = evt.target.value
      newRating[evt.target.id] = selectedVal
      setGame(newRating)
    }

    const updateExistingGame = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedGame = {
          id: libraryId,
          userId: games.userId,
          gameId: games.gameId,
          privateRating: parseInt(games.privateRating),
        };

        editMyGame(editedGame)
          .then(() => history.push("/myLibrary")
          )
    };

    useEffect(() => {
      getGameById(libraryId)
        .then(game => {
          setGame(game);
          setIsLoading(false);
        });
    }, []);

    return (
        <>
          <form>
            <h2 className="editForm_title">Give this Game a Rating</h2>
            <hr/>
            <fieldset>
              <div className="formgrid">
              <select value={games.privateRating} name="rating" id="privateRating" onChange={handleInputChange} className='form-control'>
                <option value={0}>Select a Rating</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              </div>
              <div className="alignRight">
                <Link to={"/MyLibrary"}>
                    <button>Back</button>
                </Link>
              </div>
              <div className="alignRight">
                  <button
                    type="button" disabled={isLoading}
                    onClick={updateExistingGame}
                    className="btn btn-primary"
                  >Save Rating</button>
              </div>
            </fieldset>
          </form>
        </>
    )
}