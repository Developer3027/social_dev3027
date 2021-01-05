import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Hero from './components/sections/hero';
import HeroAbout from './components/sections/heroAbout';
import Services from './components/sections/services';
import Optimization from './components/sections/pages/optimization';
import About from './components/sections/pages/about';
import Brand from './components/sections/pages/branding';
import WebDesign from './components/sections/pages/wwwdesign';
import SEO from './components/sections/pages/seo';
import Projects from './components/sections/pages/projects';
import Packages from './components/sections/pages/packages';
import Footer from './components/sections/footer';
import Contact from './components/sections/pages/contact';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='App'>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Services />
          <HeroAbout />
        </Route>
        <Route path='/optimize'>
          <Optimization />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/brand'>
          <Brand />
        </Route>
        <Route path='/webdesign'>
          <WebDesign />
        </Route>
        <Route path='/seo'>
          <SEO />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/packages'>
          <Packages />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
