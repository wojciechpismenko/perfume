import React from 'react';

import Menu from './components/Menu/Menu';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <SideMenu />
        <Footer />
      </>
    );
  }
};