import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/scss/App.scss';

import FoodsList from '../containers/FoodsList';
import FootItem from './FootItem';

function App() {
  return (
    <BrowserRouter>
      <div className="app panel-bg">
        <Route exact path="/" component={FoodsList} />
        <Route path="/food/:id" component={FootItem} />
      </div>
    </BrowserRouter>
  );
}

export default App;
