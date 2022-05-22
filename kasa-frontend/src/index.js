import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import 'typeface-montserrat'
import './styles/index.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Error from './pages/Error'
import Location from './pages/Location'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/location/:idCard'>
          <Location />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

