import "./navbar.css";

function Navigation() {
  return (
    <div>
      <header>
        <div class="container">
          <span>
            <img className="smol" src=".\images\AppleLogo.png" alt="search" />
          </span>
          <nav>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">TV</a>
            <a href="#">Music</a>
            <a href="#">Support</a>
          </nav>
          <div class="right">
            <span>
              <img
                id="search"
                src=".\images\AppleLogo.png"
                alt="search"
                className="smol"
              />
            </span>
            <span>
              <img
                id="lock"
                src=".\images\AppleLogo.png"
                alt="lock"
                className="smol"
              />
            </span>
          </div>
        </div>
      </header>
      <script src="https://use.fontawesome.com/c118aa5ce8.js"></script>
      <div class="banner"></div>
    </div>
  );
}

export default Navigation;
