import "./App.css";
import Footer from "./components/Footer/Footer";
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import Pages from "./components/Pages";
export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <PrimarySearchAppBar />
      </div>

      <div className="content">
        <Pages />
      </div>
      <>
        <Footer />
      </>
    </div>
  )
}
