import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kittens from './pages/Kittens';
import KittenLayout from './pages/KittenLayout';
import Filaberta from './pages/Filaberta';
import Contact from './pages/Contact';
// import App from './final/App';
import  { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import About from './pages/About';
import Resources from './pages/Resources'
import Garfield from './pages/Garfield';
import Pancake from './pages/Pancake';
import Rocket from './pages/Rocket';
function Layout() {
  return (
    <>
       <nav className='flex justify-evenly text-xl py-4'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/kittens'>Kittens</Link>
    <Link to='/resources'>Resources</Link>
    <Link to='/contact'>Contact</Link>
  </nav> 
  <main class="grid grid-cols-1 place-items-center h-screen">
    <Outlet />
    </main>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path='about' element={<About />} />
          <Route path='kittens' element={<KittenLayout />}>
          <Route index element={<Kittens />}></Route>
          <Route path='/kittens/filaberta' element={<Filaberta />} />
          <Route path='/kittens/garfield' element={<Garfield />} />
          <Route path='/kittens/pancake' element={<Pancake />} />
          <Route path='/kittens/rocket' element={<Rocket />} />

        </Route>
        <Route path='/resources' element={<Resources />} />
        <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
