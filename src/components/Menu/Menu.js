import React      from 'react';
import { NavLink, BrowserRouter, Route, Switch }
                  from 'react-router-dom';

import Root       from '../../views/Root/Root';
import HeadNotes  from '../../views/HeadNotesView/HeadNotesView';
import HeartNotes from '../../views/HeartNotesView/HeartNotesView';
import BaseNotes  from '../../views/BaseNotesView/BaseNotesView';
// import Button     from '../Button/Button';
import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">perfume</NavLink>
              </li>
              <li>
                <NavLink to="/headnotes">head notes</NavLink>
              </li>
              <li>
                <NavLink to="/heartnotes">heart notes</NavLink>
              </li>
              <li>
                <NavLink to="/basenotes">base notes</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/headnotes" component={HeadNotes} />
            <Route path="/heartnotes" component={HeartNotes} />
            <Route path="/basenotes" component={BaseNotes} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};