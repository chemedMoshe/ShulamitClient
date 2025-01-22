import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import Pages from "./components/Pages";
export default function App() {
  const [classNameNav, setClassNameNav] = useState("navbar");
  const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    if(window.scrollY == 0){
      setClassNameNav("navbar")
      return
    }
    if (window.scrollY < currentScrollY) {
      setClassNameNav("navbarScroll");
    } else {
      setClassNameNav("navbar");
    }
    setCurrentScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="app">
      <div className={classNameNav}>
        <PrimarySearchAppBar />
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
