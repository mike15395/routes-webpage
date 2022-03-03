import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/about/About';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home'
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
