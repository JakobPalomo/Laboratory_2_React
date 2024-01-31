import "./general.css";

function MiniCard() {
  return (
    <div className="display-show3">
      <div className="display-image2">
        <div className="disp-contain">
          <img src="./images/iphone.png" alt="effe" className="icon" />
        </div>{" "}
        <div style={{ marginBottom: 18 }}>
          <p className="details">Iphone 15 Pro max</p>
          <p className="details">Titanium</p>
          <p className="details">From ₱70,990</p>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
