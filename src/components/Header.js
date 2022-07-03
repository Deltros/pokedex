import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <a>Posible Logo</a>
      <div className="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}


  export default Header;