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