import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/home';
import Header from './component/header';
import Explore from './Pages/explore';
import SavedPage from './Pages/savedPage';
import Profile from './Pages/profile';
import MobileNav from './component/mobileNav';
import AuthPage from './Pages/authPage';
import MoreDetail from './Pages/moreDetail';
import { useEffect } from 'react';

function App() {


  return (
    <>
    <Header exact/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/explore" element={<Explore/>} />
        <Route path='/mysaved' element={<SavedPage/>}/>
        <Route path='profile' element={<Profile/>} />
        <Route path='auth' element={<AuthPage/>} />
        <Route path='details/:postid' element={<MoreDetail/>} />
      </Routes>
    </Router>
<MobileNav />
    </>
  );
}

export default App;
