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

function App() {
  return (
    <div>
      <Navigation />
      <MainHeader />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {First.map((first) => (
          <DisplayDevice FirstObj={first} />
        ))}
      </div>

      <Subhead />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {Second.map((second) => (
          <Showcase SecObj={second} />
        ))}
      </div>
      <Subhead />
      <Item />
      <Subhead />
      <MiniCard />
      <Subhead />
      <LargeShow />
      <QuickLink />
      <Footer />
    </div>
  );
}

export default App;
