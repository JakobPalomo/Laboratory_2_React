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
      <Subhead />
      <LargeShow />
      <QuickLink />
      <Footer />
    </div>
  );
}

export default App;
