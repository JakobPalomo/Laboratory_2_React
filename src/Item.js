import "./general.css";
function Item(props) {
  return (
    <div className="display-show2">
      <div className="display-image2">
        <div className="disp-contain">
          <img src={props.forObj.image2} alt="effe" className="show" />
        </div>{" "}
        <div style={{ marginBottom: 18 }}>
          <p className="details">{props.forObj.product}</p>
          <p className="details">{props.forObj.desc}</p>
          <p className="details">{props.forObj.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
