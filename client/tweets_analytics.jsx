import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux' //b inding to use redux with react
import store, { history } from './store'

import App from './components/App'
import Graph from './components/Graph'
import Profile from './components/Profile'

const Main = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ul>
          <button className='headerButton'>
            <Link to='/'>Home</Link>
          </button>
          <button className='headerButton'>
            <Link to='/graph'>Graph</Link>
          </button>
          <button className='headerButton'>
            <Link to='/profile'>Profile</Link>
          </button>
        </ul>

        <hr />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/graph' component={Graph} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Main

ReactDOM.render(<Main />, document.getElementById('root'))
