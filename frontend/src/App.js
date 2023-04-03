import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/home';
import Sidebar from './component/sidbar';
import Header from './component/header';

function App() {
  
  const primary = '#FBF5F3'
  const secondary = '#FBF5F3'
  const ctr = '#FD5200'
  const ctr2 = '#AF3800'
  const AT = window.location.pathname

  const [index , setindex] = useState('')
  const [explore , setexplore] = useState('')

  useEffect = (() =>{
    toggle_side_bar()
  })
    const toggle_side_bar= () => {
      if (AT == '/' ){
        setindex('active')
      }
    }

  return (
    <>
    <Header/>
    <Sidebar index={index} explore={explore}/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
