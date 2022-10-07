import "./test";
const Navbar = () => {
  return (
    <div id="nav">
      <nav>
        <h1>M.J</h1>

        <div className="nav-items">
          <div className="menu">Menu</div>
          <div className="lists">
            <ul style={{ paddingLeft: 0 }}>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#portfolio">
                <li>Porfolio</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#experience">
                <li>Experience</li>
              </a>
            </ul>
          </div>
          <div>
            <button className="d-btn">Download CV</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
