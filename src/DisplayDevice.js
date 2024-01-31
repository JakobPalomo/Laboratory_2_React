import "./general.css";
function DisplayDevice(props) {
  return (
    <div className="display">
      <div className="display-image">
        <div className="disp-contain">
          <img src={props.FirstObj.img} alt="effe" className="disp" />
        </div>{" "}
        <p style={{ marginTop: -48 }}>{props.FirstObj.name}</p>
      </div>
    </div>
  );
}

export default DisplayDevice;
