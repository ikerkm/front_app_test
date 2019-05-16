import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/auth/login.jsx'
import Register from './views/auth/register.jsx'
import Main from './views/main.jsx'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      < BrowserRouter >

        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/main" component={Main} exact />
        </Switch>

      </BrowserRouter >
    </div>

  );
}

export default App;
