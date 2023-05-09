import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Moviespage from './pages/Moviespage/Moviespage';
import Seriespage from './pages/Seriespage/Seriespage';
function App() {
  return (
    <div className="App">
    <Header/>
    <div className='pages'>
     <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/moviespage' element={<Moviespage/>} />
      <Route path='/seriespage' element={<Seriespage/>} />

     </Routes>
     </BrowserRouter>
    </div>
   <Footer/>
    </div>
  );
}

export default App;
