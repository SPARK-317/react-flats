/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import CardList from './cardlist.jsx';
import Map from './map.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  render() {
    return (
      <div>
        <CardList flats={flats}/>
        <Map />
      </div>
    );
  }
}

export default App;
