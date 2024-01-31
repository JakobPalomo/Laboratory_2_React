import "./App.css";
import Navigation from "./Navigation";
import MainHeader from "./MainHeader";
import DisplayDevice from "./DisplayDevice";
import Subhead from "./Subhead";
import Showcase from "./Showcase";
import "./general.css";
import Item from "./Item";
import MiniCard from "./MiniCard";

function App() {
  return (
    <div>
      <Navigation />
      <MainHeader />
      <DisplayDevice />
      <Subhead />
      <Showcase />
      <Subhead />
      <Item />
      <Subhead />
      <MiniCard />
    </div>
  );
}

export default App;
