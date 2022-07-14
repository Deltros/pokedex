import { BrowserRouter, Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <a>Posible Logo</a>
      <BrowserRouter>
        <div className="header-right">
          <Link to='/pokemones' className="active">Pokemones</Link>
          <Link to='/pokemon'>Pokemon</Link>
          <a href="#about">About</a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Header;