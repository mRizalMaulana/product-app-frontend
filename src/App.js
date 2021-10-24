import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Product from './product/pages/Product';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Product />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
