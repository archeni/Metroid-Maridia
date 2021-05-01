const remoteURL = "http://localhost:8088"

  export const getAllMyGames = () => {
    return fetch(`${remoteURL}/myGames`)
    .then(result => result.json())
  }

  export const addMyGame = (newMyGame) => {
    return fetch(`${remoteURL}/myGames`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMyGame)
    }).then(response => response.json())
  }

  export const editMyGame = (game) => {
    return fetch(`${remoteURL}/myGames/${game.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    }).then(data => data.json());
  }

  export const deleteMyGame = (id) => {
    return fetch(`${remoteURL}/myGames/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }