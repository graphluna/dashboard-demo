const url = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty';

class Services {
  fetchData() {
    return fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
  }  
}

export const AppServices = new Services();

