import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MiniKeyboard from './pages/MiniKeyboard';
import Keyboard from './pages/Keyboard';
import Upright from './pages/Upright';
import Grand from './pages/Grand';
import Aww from './pages/Aww';

function App() {
  return (
    <div>
      <div className="App">
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mini-keyboard' element={<MiniKeyboard/>}/>
          <Route path='/keyboard' element={<Keyboard/>}/>
          <Route path='/upright' element={<Upright/>}/>
          <Route path='/grand' element={<Grand/>}/>
          <Route path='/aww' element={<Aww/>}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
