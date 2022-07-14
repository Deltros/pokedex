import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PokemonesPage } from '../pages/PokemonesPage'
import { PokemonPage } from '../pages/PokemonPage'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/pokemones'>pokemones</Link>
        <Link to='/pokemon'>pokemon</Link>

        <Routes>
          <Route path='/pokemones' element={<PokemonesPage />}>
          </Route>
          <Route path='/pokemon' element={<PokemonPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
