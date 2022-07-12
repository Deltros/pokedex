import axios from 'axios'

export const loadDataPokemones = async (inicio) => {

  // Obtiene las url y nombres de x pokemones
  let uri = `https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=20`;
  const response = await axios.get(uri);
  const {results} = response.data;

  //Con las url obtiene toda la información de los pokemones
  const uris = await Promise.all(
    results.map(result => axios.get(result.url)
  ));

  const pokemones = await uris.map(resultado => resultado.data);

  return pokemones;
}

