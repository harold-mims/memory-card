function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-header" >
        <img className ="navbar-logo" src="./One-Piece-Photos/One_Piece_Logo.png" />
        <p className= "site-title">MEMORY GAME</p>
      </a>
      <a
        href="https://github.com/harold-mims/cv-builder/tree/main"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </nav>
  );
}

function Footer() {
  return <p className="footer"> </p>;
}

export {Navbar, Footer}