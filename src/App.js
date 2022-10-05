import Navbar from './components/Navbar';
import './App.css';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (<>
  <Navbar/>
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/One' element={<One/>}></Route>
      <Route path='/Two' element={<Two/>}></Route>
      <Route path='/Three' element={<Three/>}></Route>
    </Routes>
  </div>
  
  </>)
}

export default App;
