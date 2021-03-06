import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import App from './App'
import Home from './Home'
import Register from './Register'
import Teacher from './Teacher'
import Game from './Game'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Home }/>
        <Route path="/register" component={ Register } />
        <Route path="/teacher" component={ Teacher }/>
        <Route path="/:words/game" component={ Game }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
