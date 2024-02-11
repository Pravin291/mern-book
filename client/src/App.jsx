import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Shop from './pages/Shop.jsx';
import Header from './components/Header.jsx';

import MyFooter from './components/MyFooter.jsx';
function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
    <MyFooter/>
  </BrowserRouter>
}

export default App;
