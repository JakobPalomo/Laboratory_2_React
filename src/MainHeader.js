import "./general.css";
function MainHeader() {
  const now = new Date();
  const currentHour = now.getHours();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="title">
        {currentHour >= 7 && currentHour < 21 ? (
          <h1>
            <strong style={{ color: "black" }}>We are Open.</strong> Come and
            buy the products you love.
          </h1>
        ) : (
          <h1>
            <strong style={{ color: "Grey" }}>Currently resting.</strong> Come
            back to the store the next time.
          </h1>
        )}
      </div>
      <div className="helper" style={{ flexWrap: "nowrap" }}>
        <div>
          <img src="./images/pfp.jpg" alt="rr" className="pfp" />
        </div>
        <div style={{ marginLeft: 24, flexWrap: "nowrap" }}>
          <p style={{ fontSize: 12 }}>Need Shopping Help?</p>
          <p style={{ fontSize: 12, color: "blue" }}>Ask a Specialist</p>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
