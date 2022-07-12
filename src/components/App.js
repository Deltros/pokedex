import '../styles/App.css';
import { useState,useEffect  } from 'react';
import { loadDataPokemones } from '../services/Pokemones'
import { ParsePokemones } from './Pokemones'

import Button from '@mui/material/Button';

const App = () => {

  const [paginaActual, setPaginaActual] = useState(0);
  const [pokemones, setPokemones] = useState({})
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    
    ( async () => {
      const data = await loadDataPokemones(paginaActual);
      setPokemones(data);
      setLoaded(true);
    })();

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
      <Button 
        disabled={ !paginaActual } 
        onClick={ () => actualizarPaginaActual(2) }>
          Anterior
      </Button>
      <Button onClick={ () => actualizarPaginaActual(0) }>
        Inicio
      </Button>
      <Button onClick={ () => actualizarPaginaActual(1) }>
        Siguiente
      </Button>

      <ParsePokemones pokemones={pokemones}/>
    </div>
  );
}

export default App;
