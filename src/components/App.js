import '../styles/App.css';
import { useState,useEffect  } from 'react';
import { getPokemones } from '../services/Pokemones'
import { ListPokemones } from './Pokemones'

const App = () => {

  const [paginaActual, setPaginaActual] = useState(0);
  const [pokemones, setPokemones] = useState({})
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    setLoaded(false);

    getPokemones(paginaActual)
     .then(pokemones => {
      setPokemones(pokemones);
      setLoaded(true);
     });

  }, [paginaActual]);

  const actualizarPaginaActual = (direccion) => {
    let pagina = 0;
  
    if (direccion == 0) {
      pagina = 0;
    } else if (direccion == 1) {
      pagina = paginaActual+20;
    } if (direccion == 2) {
      pagina = paginaActual-20;
    }

    setPaginaActual(pagina);
  }

  return (
    <div className="App">
      <button 
        disabled={ !paginaActual } 
        onClick={ () => actualizarPaginaActual(2) }>
          Anterior
      </button>
      <button onClick={ () => actualizarPaginaActual(0) }>
        Inicio
      </button>
      <button onClick={ () => actualizarPaginaActual(1) }>
        Siguiente
      </button>

      <ListPokemones pokemones={pokemones}/>
    </div>
  );
}

export default App;
