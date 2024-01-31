import "./navbar.css";

function Navigation() {
  return (
    <div>
      <header>
        <div class="container">
          <nav>
            <span>
              <img className="smol" src=".\images\apple.png" alt="search" />
            </span>
            <a href="#">Store</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">Airpods</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessories</a>
            <a href="#">Support</a>
            <span>
              <img
                id="search"
                src=".\images\search.jpg"
                alt="search"
                className="smol"
              />
              <span>
                <img
                  id="lock"
                  src=".\images\cart.jpg"
                  alt="lock"
                  className="smol"
                />
              </span>
            </span>
          </nav>
          <div class="right"></div>
        </div>
      </header>
      <script src="https://use.fontawesome.com/c118aa5ce8.js"></script>
      <div class="banner"></div>
    </div>
  );
}

export default Navigation;
