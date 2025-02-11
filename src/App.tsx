import "./App.css";
import Footer from "./components/Footer/Footer";
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import Pages from "./components/Pages";
import Headroom from "react-headroom"

export default function App() {

  return (
    <div className="app">
      <div className="nav">
      <Headroom>
        <PrimarySearchAppBar />
      </Headroom>
      </div>
      <div className="content">
        <Pages />
      </div>
      <>
        <Footer />
      </>
    </div>
  );
}
