import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/home';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Explore from './Pages/explore';
import SavedPage from './Pages/savedPage';
import Profile from './Pages/profile';
import MobileNav from './component/mobileNav';
import AuthPage from './Pages/authPage';
import MoreDetail from './Pages/moreDetail';

function App() {
  
  const primary = '#FBF5F3'
  const secondary = '#FBF5F3'
  const ctr = '#FD5200'
  const ctr2 = '#AF3800'


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
        <Route path='auth' element={<AuthPage/>} />
        <Route path='details' element={<MoreDetail/>} />
      </Routes>
    </Router>
<MobileNav />
    </>
  );
}

export default App;
