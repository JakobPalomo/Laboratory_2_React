import "./App.css";
import Navigation from "./Navigation";
import MainHeader from "./MainHeader";
import DisplayDevice from "./DisplayDevice";
import Subhead from "./Subhead";
import Showcase from "./Showcase";
import "./general.css";
import Item from "./Item";
import MiniCard from "./MiniCard";
import LargeShow from "./LargeShow";
import QuickLink from "./QuickLink";
import Footer from "./Footer";
import First from "./First.js";
import Second from "./Second.js";
import Third from "./Third.js";
import Fourth from "./Fourth.js";
import Fifth from "./Fifth.js";
import Six from "./Six.js";
import Seven from "./Seven.js";

function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Navigation />
      </div>

      <MainHeader />
      <div className="layout">
        {First.map((first) => (
          <DisplayDevice FirstObj={first} />
        ))}
      </div>

      <Subhead />
      <div className="layout">
        {Second.map((second) => (
          <Showcase SecObj={second} />
        ))}
      </div>
      <Subhead />
      <div className="layout">
        {Third.map((third) => (
          <Showcase SecObj={third} />
        ))}

        {Fourth.map((fourth) => (
          <Item forObj={fourth} />
        ))}
      </div>
      <Subhead />
      <div className="layout">
        {Fifth.map((third) => (
          <MiniCard SecObj={third} />
        ))}
      </div>
      <Subhead />
      <div className="layout">
        {Six.map((third) => (
          <Showcase SecObj={third} />
        ))}

        {Seven.map((fourth) => (
          <Item forObj={fourth} />
        ))}
      </div>
      <Subhead />
      <LargeShow />
      <Subhead />
      <LargeShow />
      <QuickLink />
      <Footer />
    </div>
  );
}

export default App;
