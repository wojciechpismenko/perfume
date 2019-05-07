import React      from 'react';
import { NavLink, BrowserRouter, Route, Switch }
                  from 'react-router-dom';

import Root       from '../../views/Root/Root';
import HeadNotes  from '../../views/HeadNotesView/HeadNotesView';
import HeartNotes from '../../views/HeartNotesView/HeartNotesView';
import BaseNotes  from '../../views/BaseNotesView/BaseNotesView';

import brainColor from '../../assets/images/brain.png';
import brainBW    from '../../assets/images/brain2.png';
import heartColor from '../../assets/images/heart.png';
import heartBW    from '../../assets/images/heart2.png';
import bootColor  from '../../assets/images/boot.png';
import bootBW     from '../../assets/images/boot2.png';

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
                <NavLink to="/headnotes">
                  nuty głowy
                  <img className="Menu-imgActive" src={brainColor} alt="G" />
                  <img className="Menu-imgDisactive" src={brainBW} alt="G" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/heartnotes">
                  nuty serca
                  <img className="Menu-imgActive" src={heartColor} alt="S" />
                  <img className="Menu-imgDisactive" src={heartBW} alt="S" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/basenotes">
                  nuty bazy
                  <img className="Menu-imgActive" src={bootColor} alt="B" />
                  <img className="Menu-imgDisactive" src={bootBW} alt="B" />
                </NavLink>
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