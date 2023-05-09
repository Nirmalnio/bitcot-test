import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Moviespage from './pages/Moviespage/Moviespage';
import Seriespage from './pages/Seriespage/Seriespage';
import Errorpage from './pages/Errorpage/Errorpage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header/>
    <div className='pages'>
     <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route path='/moviespage' element={<Moviespage/>} />
      <Route path='/seriespage' element={<Seriespage/>} />
      <Route path="*" element={<Errorpage />} />
     </Routes>
    </div>
    <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
