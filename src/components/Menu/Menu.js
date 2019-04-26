import React      from 'react';
import { NavLink, BrowserRouter, Route, Switch }
                  from 'react-router-dom';

import Root       from '../../views/Root/Root';
import HeadNotes  from '../../views/HeadNotesView/HeadNotesView';
import HeartNotes from '../../views/HeartNotesView/HeartNotesView';
import BaseNotes  from '../../views/BaseNotesView/BaseNotesView';
import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav className="Menu">
            <ul>
              <li>
                <NavLink exact to="/">perfumy</NavLink>
              </li>
              <li>
                <NavLink to="/headnotes">nuty głowy</NavLink>
              </li>
              <li>
                <NavLink to="/heartnotes">nuty serca</NavLink>
              </li>
              <li>
                <NavLink to="/basenotes">nuty bazy</NavLink>
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