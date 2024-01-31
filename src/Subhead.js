import "./general.css";
function Subhead(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="title2">
        <h2>
          <strong style={{ color: props.color }}>{props.word}</strong>{" "}
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default Subhead;
