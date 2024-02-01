import React from "react";
import "./navbar.css";

function Navigation() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar">
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
        </div>
      </header>
      <div className="hidden-container">Coming Soon</div>
    </div>
  );
}

export default Navigation;
