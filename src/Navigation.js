import React, { useState } from "react";

import "./navbar.css";

function Navigation() {
  const links = [
    {
      href: "#",
      text: "Store",
      hoverContent: "Explore all Apple products and accessories...",
    },
    {
      href: "#",
      text: "Mac",
      hoverContent: "Discover the latest Mac models...",
    },
    {
      href: "#",
      text: "iPad",
      hoverContent: "Choose from a range of iPads...",
    },
    {
      href: "#",
      text: "iPhone",
      hoverContent: "Capture stunning photos and videos...",
    },
    {
      href: "#",
      text: "Watch",
      hoverContent: "Stay on top of your health and fitness...",
    },
    {
      href: "#",
      text: "Airpods",
      hoverContent: "Experience immersive sound and seamless connectivity...",
    },
    {
      href: "#",
      text: "TV & Home",
      hoverContent: "Create a smart and connected home...",
    },
    {
      href: "#",
      text: "Entertainment",
      hoverContent: "Access millions of songs, movies, TV shows...",
    },
    {
      href: "#",
      text: "Accessories",
      hoverContent: "Find the perfect accessories to complement...",
    },
  ];

  const [hoverLink, setHoverLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoverLink(link);
  };

  const handleMouseLeave = () => {
    setHoverLink(null);
  };

  return (
    <div>
      <header>
        <div className="container">
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
      <div class="banner"></div>
    </div>
  );
}

export default Navigation;
