import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import MemberBar from './components/member'
import Hero from './components/sections/hero'
import HeroAbout from './components/sections/heroAbout'
import Services from './components/sections/services'
import Optimization from './components/sections/pages/optimization'
import About from './components/sections/pages/about'
import Brand from './components/sections/pages/branding'
import WebDesign from './components/sections/pages/wwwdesign'
import SEO from './components/sections/pages/seo'
import Projects from './components/sections/pages/projects'
import Packages from './components/sections/pages/packages'
import Footer from './components/sections/footer'
import Contact from './components/sections/pages/contact'

import Register from './components/auth/register'
import Login from './components/auth/login'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'

import CreateProfile from './components/forms/CreateProfile'
import EditProfile from './components/forms/EditProfile'

import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const [isMainOpen, setIsMainOpen] = useState(false)
  const [isMemberOpen, setIsMemberOpen] = useState(false)

  const toggleMain = () => {
    setIsMainOpen(!isMainOpen)
  }

  const toggleMember = () => {
    setIsMemberOpen(!isMemberOpen)
  }

  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar toggleMain={toggleMain} toggleMember={toggleMember} />
        <Sidebar isMainOpen={isMainOpen} toggleMain={toggleMain} />
        <MemberBar isMemberOpen={isMemberOpen} toggleMember={toggleMember} />
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Services />
            <HeroAbout />
          </Route>
          <Route path='/optimize' component={Optimization} />
          <Route path='/about' component={About} />
          <Route path='/brand' component={Brand} />
          <Route path='/webdesign' component={WebDesign} />
          <Route path='/seo' component={SEO} />
          <Route path='/projects' component={Projects} />
          <Route path='/packages' component={Packages} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/create-profile' component={CreateProfile} />
          <PrivateRoute path='/edit-profile' component={EditProfile} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
