import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  

  return (
    <>
      <div className="App host-grotesk">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
