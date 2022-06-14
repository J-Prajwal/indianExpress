import "./App.css"
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Header />
      <Footer/>

      </div>
    </div>
  );
}

export default App;
