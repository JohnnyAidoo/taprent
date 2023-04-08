import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/home';
import Sidebar from './component/sidbar';
import Header from './component/header';
import Explore from './Pages/explore';
import SavedPage from './Pages/savedIPage';
import Profile from './Pages/profile';

function App() {
  
  const primary = '#FBF5F3'
  const secondary = '#FBF5F3'
  const ctr = '#FD5200'
  const ctr2 = '#AF3800'
  const AT = window.location.pathname


  return (
    <>
    <Header exact/>
    <Sidebar exact/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/explore" element={<Explore/>} />
        <Route path='/mysaved' element={<SavedPage/>}/>
        <Route path='profile' element={<Profile/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
