import "./general.css";

function Showcase(props) {
  let stockColor = "white";
  let blurStyle = {};

  if (props.SecObj.stock < 60) {
    stockColor = "red";
  }

  if (props.SecObj.stock === 0) {
    blurStyle = { filter: "blur(3px)" };
  }

  return (
    <div
      className="display-show2 "
      style={{
        ...blurStyle,
        backgroundColor: props.SecObj.bg,
        color: props.SecObj.color,
      }}
    >
      <div className="display-image2">
        <div style={{ marginBottom: 18 }}>
          <p className="details" style={{ fontSize: 12, marginBottom: -18 }}>
            {props.SecObj.product}
          </p>
          <p className="details" style={{ fontSize: 26 }}>
            {props.SecObj.desc}
          </p>
          <p className="details">{props.SecObj.price}</p>
          <p className="details" style={{ fontSize: 12, color: stockColor }}>
            Stock: {props.SecObj.stock}
          </p>
        </div>
        <div
          className="disp-contain"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "28px",
          }}
        >
          <img src={props.SecObj.image2} alt="effe" className="show" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Showcase;
