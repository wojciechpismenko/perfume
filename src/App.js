import React from 'react';
import {
  BrowserRouter,
  Route, Switch,
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';

import Root           from './views/Root/Root';
import HeadNotes      from './views/HeadNotesView/HeadNotesView';
import HeartNotes     from './views/HeartNotesView/HeartNotesView';
import BaseNotes      from './views/BaseNotesView/BaseNotesView';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <SideMenu />
        <Footer />

        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/headnotes" component={HeadNotes} />
          <Route path="/heartnotes" component={HeartNotes} />
          <Route path="/basenotes" component={BaseNotes} />
        </Switch>
      </BrowserRouter>
    );
  }
};