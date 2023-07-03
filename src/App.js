import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Upload from './Components/Upload';



function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/videos'} element={<Videos/>}/>
      <Route path={'/Login'} element={<Login/>}/>
      <Route path={'/Signup'} element={<Signup/>}/>
      <Route path={'/Upload'} element={<Upload/>}/>
     
     
    </Routes>
    <Footer/>
   </Router>
   
  );
}

export default App;
