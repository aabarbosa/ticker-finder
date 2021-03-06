import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import StockDetails from './components/reuse/StockDetails/StockDetails';
import Tiles from './components/reuse/Tiles/Tiles';
import Portfolio from './components/reuse/Portfolio/Portfolio';
import Screener from './components/reuse/Screener/Screener';

export default (
  <Switch>
    <Route component={ App } path="/" exact />
    <Route component={ Screener } path="/screener" />
    <Route component={ StockDetails } path="/company/:id" />
    <Route component={ Tiles } path="/watchlist" />
    <Route component={ Portfolio } path="/portfolio" />
  </Switch>
)