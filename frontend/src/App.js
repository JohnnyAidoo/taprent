import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/home';

function App() {
  
  const primary = '#FBF5F3'
  const secondary = '#FBF5F3'
  const ctr = '#FD5200'
  const ctr2 = '#AF3800'


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
