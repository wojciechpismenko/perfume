import React from 'react';

import Menu from './components/Menu/Menu';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Menu />
      <div>
      App
      </div>
      </>
    );
  }
};