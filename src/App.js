import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import About from './pages/Abaout';
import Repos from './pages/Repos';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Repos />
      <Skills />
      <Contact />
    </>
  );
};

export default App;