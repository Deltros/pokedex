import '../styles/App.css';
import { useState,useEffect  } from 'react';

const ListPokemones = ({pokemones}) => {

  let final = [];
  Object.keys(pokemones).map(key => (
    final.push(<li key={key}>{pokemones[key].name}</li>)
  ))

  return <ul>{final}</ul>
}

const App = () => {

  useEffect(() => {
    getPokemones(0);
  }, []);

  const [paginaActual, setPaginaActual] = useState(0);
  const [pokemones, setPokemones] = useState({})

  const getPokemones = (direccion) => {

    let pagina = 0;
  
    if (direccion == 0) {
      pagina = 0;
    } else if (direccion == 1) {
      pagina = paginaActual+20;
    } if (direccion == 2) {
      pagina = paginaActual-20;
    }

    let uri = `https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`;
    
    fetch(uri)
      .then(response => response.json())
      .then(data => setPokemones(data.results) ); 

    setPaginaActual(pagina);
  }

  return (
    <div className="App">
      <button onClick={() => getPokemones(2)}>Anterior</button>
      <button onClick={() => getPokemones(0)}>Resetear</button>
      <button onClick={() => getPokemones(1)}>Siguiente</button>

      <ListPokemones pokemones={pokemones}/>
    </div>
  );
}

export default App;
