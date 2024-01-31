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
          <strong>Store.</strong> The best way to buy the products you love.
        </h1>
      </div>
    </div>
  );
}

export default MainHeader;
