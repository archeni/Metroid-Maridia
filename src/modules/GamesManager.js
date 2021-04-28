const remoteURL = "http://localhost:8088"

  export const getAllGames = () => {
    return fetch(`${remoteURL}/games`)
    .then(result => result.json())
  }

  export const addGame = (newGame) => {
    return fetch(`${remoteURL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
    }).then(response => response.json())
  }