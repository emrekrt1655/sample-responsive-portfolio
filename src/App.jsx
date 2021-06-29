import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Works from './components/Works/Works'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import './app.scss'

import {useState} from 'react';



function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className="app">
      <Navbar hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu} />
      <Menu hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
