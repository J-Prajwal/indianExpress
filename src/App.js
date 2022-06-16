import "./App.css"
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Header />
      <Footer/>
      </div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
