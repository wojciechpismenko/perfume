import React from 'react';
import { NavLink }  from 'react-router-dom';

import perfumeColor from '../../assets/images/perfume.png';
import perfumeBW from '../../assets/images/perfume2.png';
import brainColor from '../../assets/images/brain.png';
import brainBW from '../../assets/images/brain2.png';
import heartColor from '../../assets/images/heart.png';
import heartBW from '../../assets/images/heart2.png';
import bootColor from '../../assets/images/boot.png';
import bootBW from '../../assets/images/boot2.png';


import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <nav className="Menu">
          <ul>
            <li>
              <NavLink activeClassName="Menu-navActive" exact to="/" name="Root">
                perfumy
                <img className="Menu-imgActive" src={perfumeColor} alt="" />
                <img className="Menu-imgDisactive" src={perfumeBW} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Menu-navActive" to="/headnotes" name="HeadNotes">
                nuty głowy
                <img className="Menu-imgActive" src={brainColor} alt="" />
                <img className="Menu-imgDisactive" src={brainBW} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Menu-navActive" to="/heartnotes" name="HeartNotes">
                nuty serca
                <img className="Menu-imgActive" src={heartColor} alt="" />
                <img className="Menu-imgDisactive" src={heartBW} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Menu-navActive" to="/basenotes" name="BaseNotes">
                nuty bazy
                <img className="Menu-imgActive" src={bootColor} alt="" />
                <img className="Menu-imgDisactive" src={bootBW} alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
};