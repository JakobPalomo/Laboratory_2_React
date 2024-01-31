function LargeShow(props) {
  return (
    <div className="display-show4">
      <div className="display-image2">
        <div style={{ marginBottom: 18 }}>
          <p className="details">{props.SecObj.product}</p>
          <p className="details" style={{ fontSize: 26 }}>
            {props.SecObj.desc}
          </p>
          <p className="details">{props.SecObj.price}</p>
        </div>
        <div className="disp-contain2">
          <img src={props.SecObj.image2} alt="effe" className="show2" />
        </div>{" "}
      </div>
    </div>
  );
}

export default LargeShow;
