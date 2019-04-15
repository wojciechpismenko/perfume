import React from 'react';

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Footer />
      </>
    );
  }
};