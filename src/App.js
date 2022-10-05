import Navbar from './components/Navbar';
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import Review from './pages/Review';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (<>
  <Navbar/>
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/review/:id' element={<Review/>}></Route>
    </Routes>
  </div>
  
  </>)
}

export default App;
