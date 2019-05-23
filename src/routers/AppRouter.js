import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
