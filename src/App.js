import logo from './logo.svg';
import './App.css';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { color } from 'framer-motion';

function App() { 
  const [toggle,settoggle]=useState(false)
  console.log(localStorage.getItem("theme"))
  return (
    <div style={{
      backgroundColor:toggle?"black":"white",
      color:toggle?"white":"black"
      }}  className="App">    
        <Navbar toggle={toggle} settoggle={settoggle} />
      <div>
        
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </div>
  );
}



export default App;
