const NavBar = ({totalCounters}) => {
    console.log("Navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.google.com">
        Navbar{" "}
        <div className="badge m-2 bg-info">{totalCounters}</div>
      </a>
    </nav>
  );
};

export default NavBar;
