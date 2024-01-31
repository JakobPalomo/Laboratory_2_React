import "./general.css";

function MiniCard(props) {
  return (
    <div className="display-show3">
      <div className="display-image2">
        <div className="disp-contain">
          <img src={props.SecObj.image2} alt="effe" className="icon" />
        </div>{" "}
        <div style={{ marginBottom: 18 }}>
          <p className="details">{props.SecObj.product}</p>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
