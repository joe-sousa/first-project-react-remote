import React from 'react';
import ModelCalculator from './ModelCalculator';

export default class App extends React.Component {

  render() {
    return (
      <div >
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <ModelCalculator />
      </div >
    );
  }
}

