
import './App.css';
// import Enterarticles from './pages/Entertainment/Enterarticles';
import Entertaimentnews from './pages/Entertainment/Entertaimentnews';
import Entertainment from './pages/Entertainment/Entertainment';
import Entermore from './pages/Entertainment/Entersidebar/Entermore';
import EnterApi from './pages/Entertainment/EnterApi';
import Mininavbar from './pages/Entertainment/Navbar/Mininavbar';
import MainEntertainment from './pages/Entertainment/MainEntertainment';
import { Route, Routes } from 'react-router-dom';
import Detailnews from './pages/Entertainment/Detailnews/Detailnews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path=''element={<MainEntertainment/>}/>
        <Route path='detailsnews' element={<Detailnews/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
