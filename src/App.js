import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import About from './pages/about'
import Clock from './pages/clock';
import Props from './pages/props'
import Clicker from './pages/clicker';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path='/clock' element={<Clock/>}/>
        <Route path='/props' element={<Props/>}/>
        <Route path='/clicker' element={<Clicker/>}/>
      </Routes>
    </Router>
  );
}

export default App;
