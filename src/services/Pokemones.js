import axios from 'axios'

export const getPokemones = (inicio) => {

  let uri = `https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=20`;
  
  return axios.get(uri)
    .then((response) => {
      const {results} = response.data;
      return results
    }); 
}