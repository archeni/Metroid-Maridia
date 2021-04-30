const remoteURL = "http://localhost:8088"

  export const getAllGames = () => {
    return fetch(`${remoteURL}/games`)
    .then(result => result.json())
  }