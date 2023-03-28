
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
 
  return (
    <div >    
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      <div>
        
        
        
      </div>
    </div>
  );
}



export default App;
