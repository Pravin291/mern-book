import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './pages/About.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Shop from './pages/Shop.jsx';
import NavBar from './components/NavBar.jsx';
function App() {
  return <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
