import "./general.css";

function Showcase(props) {
  return (
    <div
      className="display-show2 "
      style={{ backgroundColor: props.SecObj.bg, color: props.SecObj.color }}
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
        </div>
        <div className="disp-contain">
          <img src={props.SecObj.image2} alt="effe" className="show" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Showcase;
