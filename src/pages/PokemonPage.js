import { useParams } from "react-router-dom";
import { useState, useEffect  } from 'react';
import axios from 'axios'
import { ParsePokemon } from '../components/Pokemon'

export const PokemonPage = (props) => {

    let { nombre } = useParams();
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {

      ( async () => {
        let uri = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
        const response = await axios.get(uri);
        setPokemon(response.data);
      })();

    },[]);

    return (
      <div className="App">
        <h1>{pokemon.name}</h1>
        <ParsePokemon pokemon={pokemon}/>
      </div>
    );

}
