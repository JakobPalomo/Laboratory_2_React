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
import Eight from "./Eight.js";
import Nine from "./Nine.js";
import Ten from "./Ten.js";

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

      <Subhead
        word="The latest."
        title="Take a look at what’s new, right now."
        color="black"
      />
      <div className="layout">
        {Second.map((second) => (
          <Showcase SecObj={second} />
        ))}
      </div>
      <Subhead
        word="Accessories."
        title="Get the perfect gift for the person who gets you."
        color="red"
      />
      <div className="layout">
        {Third.map((third) => (
          <Showcase SecObj={third} />
        ))}

        {Fourth.map((fourth) => (
          <Item forObj={fourth} />
        ))}
      </div>
      <Subhead
        word="The Apple Store difference."
        title="Even more reasons to shop with us."
        color="black"
      />
      <div className="layout">
        {Fifth.map((third) => (
          <MiniCard SecObj={third} />
        ))}
      </div>
      <Subhead
        word="Loud and clear. "
        title="Unparalleled choices for rich, high-quality sound."
        color="black"
      />
      <div className="layout">
        {Six.map((third) => (
          <Showcase SecObj={third} />
        ))}

        {Seven.map((fourth) => (
          <Item forObj={fourth} />
        ))}
      </div>
      <Subhead
        word="Help is here. "
        title="Whenever and however you need it."
        color="black"
      />
      <div className="layout">
        {Eight.map((third) => (
          <LargeShow SecObj={third} />
        ))}
      </div>
      <Subhead
        word="The Apple experience. "
        title="Do even more with Apple products and services."
        color="black"
      />
      <div className="layout">
        {Nine.map((third) => (
          <LargeShow SecObj={third} />
        ))}
      </div>
      <Subhead
        word="Special stores."
        title="Exclusive savings for students, educators and businesses."
        color="black"
      />
      <div className="layout">
        {Ten.map((third) => (
          <Showcase SecObj={third} />
        ))}
      </div>
      <QuickLink />
      <Footer />
    </div>
  );
}

export default App;
