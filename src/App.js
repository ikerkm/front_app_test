import React from 'react';
import logo from './logo.svg';
import './App.css';
import './nav.css'
import Login from './views/auth/login.jsx'
import Register from './views/auth/register.jsx'
import Main from './views/main.jsx'
import Config from './views/config.jsx'
import { BrowserRouter, Link, Route, Switch, Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">


      < BrowserRouter >
        <div id="cssmenu">
          <ul>
            <li class="active"><Link to="/main"><span><i class="fa fa-fw fa-cog"></i> Home</span></Link></li>
            <li><Link to="/config"><span><i class="fa fa-fw fa-cog"></i> Settings</span></Link></li>
          </ul>
        </div>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/main" component={Main} exact />
          <Route path="/config" component={Config} exact />
        </Switch>

      </BrowserRouter >
    </div>

  );
}

export default App;
