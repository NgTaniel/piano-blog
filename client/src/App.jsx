import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MiniKeyboard from './pages/MiniKeyboard';
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
          <Route path='/aww' element={<Aww/>}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
