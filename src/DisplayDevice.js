import "./general.css";
function DisplayDevice(props) {
  let stockColor = "black";
  let stockStatus = "";

  if (props.FirstObj.stock < 80) {
    stockColor = "red";
    stockStatus = "Low Stock, Get now!";
  }

  return (
    <div className="display">
      <div className="display-image">
        <div className="disp-contain">
          <img src={props.FirstObj.img} alt="effe" className="disp" />
        </div>{" "}
        <p style={{ marginTop: -48 }}>{props.FirstObj.name}</p>
        <p style={{ marginTop: -10, fontSize: 12, color: stockColor }}>
          {props.FirstObj.stock}
        </p>
        {stockStatus && (
          <p style={{ color: stockColor, marginTop: -10, fontSize: 8 }}>
            {stockStatus}
          </p>
        )}
      </div>
    </div>
  );
}

export default DisplayDevice;
