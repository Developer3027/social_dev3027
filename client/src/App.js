import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Hero from './components/sections/hero';
import Services from './components/sections/services';
import Optimization from './components/sections/pages/optimization';
import About from './components/sections/pages/about';
import Brand from './components/sections/pages/branding';
import WebDesign from './components/sections/pages/wwwdesign';
import SEO from './components/sections/pages/seo';

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
      </Switch>
    </div>
  );
}

export default App;
