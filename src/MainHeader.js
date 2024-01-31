import "./general.css";
function MainHeader() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="title">
        <h1>
          <strong style={{ color: "black" }}>Store.</strong> The best way to buy
          the products you love.
        </h1>
      </div>
      <div className="helper">
        <div>
          <img src="./images/pfp.jpg" alt="rr" className="pfp" />
        </div>
        <div style={{ marginLeft: 24 }}>
          <p style={{ fontSize: 12 }}>Need Shopping Help?</p>
          <p style={{ fontSize: 12 }}>Ask a Specialist</p>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
