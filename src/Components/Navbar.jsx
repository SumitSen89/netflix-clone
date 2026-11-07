
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">NETFLIX</h1>
      <div className="nav-links">
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>My List</span>
      </div>
      <button className="login-btn">Sign In</button>
    </nav>
  );
}

export default Navbar;
