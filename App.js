import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/about/About';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home'
import Nav from './components/navbar/Nav';
import Login from './components/login/Login';
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const { user } = useAuth0();
  return (
   
    <>
       {!user ? (<Login />) : (<div className='App'>
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
      </div>)}
    
      </>
  );
}

export default App;
