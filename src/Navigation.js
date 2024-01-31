import "./navbar.css";

function Navigation() {
  return (
    <div>
      <header>
        <div class="container">
          <i id="logo" class="fa fa-apple" aria-hidden="true"></i>
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
                src="http://mateen.kurdzman.net/search.png"
                alt="search"
              />
            </span>
            <span>
              <img
                id="lock"
                src="http://mateen.kurdzman.net/padlock.png"
                alt="lock"
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
