import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/scss/App.scss';

import DogsList from '../containers/DogsList';
import ShowDog from './ShowDog';

function App() {
  return (
    <BrowserRouter>
      <div className="panel-bg">
        <Route exact path="/" component={DogsList} />
        <Route path="/dog/:id" component={ShowDog} />
      </div>
    </BrowserRouter>
  );
}

export default App;
