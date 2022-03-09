import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Portfolio from './pages/Portfolio'
import { Route, Switch } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'
import Customer from './pages/Customer'
import { Helmet } from 'react-helmet'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
        <Helmet>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta
            name='description'
            content='Usman Awan - A passionate freelance photographer.'
          />
          <meta name='author' content='Usman Awan' />
          <title>Usman Awan</title>
        </Helmet>
        <div id='wrapper'>
          <Navbar />
          <Home />
          <Portfolio />
          <Customer />
          <Packages />
          <Contact />
          
        </div>
      </Route>
    </Switch>
  )
}

export default App
