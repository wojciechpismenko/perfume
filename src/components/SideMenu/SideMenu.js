import React          from 'react';
import { NavLink }    from 'react-router-dom';

import humanMuscle    from '../../assets/images/human_muscle.png';
import humanSkeleton  from '../../assets/images/human_skeleton.png';
import humanBrain     from '../../assets/images/human_brain.png';
import humanHeart     from '../../assets/images/human_heart.png';
import humanBoot      from '../../assets/images/human_boot.png';

import Button from '../Button/Button';

import './SideMenu.scss';

export default class SideMenu extends React.Component {
  componentWillUnmount() {
    this.buttonNode.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = (evt) => {
    this.buttonNode.style.setProperty('--left', evt.pageX - evt.target.offsetLeft + 'px');
    this.buttonNode.style.setProperty('--top', evt.pageY - evt.target.offsetTop + 'px');
  }

  getRef = (buttonNode) => {
    buttonNode.addEventListener('mousemove', this.onMouseMove);
    this.buttonNode = buttonNode;
  }

  render() {
    // const { notes } = this.props;
    const baton = (
      <button type="button" className="button-test" ref={this.getRef}>
        <span>KLIK</span>
      </button>
    );

    return (
      <>
        <div className="SideMenu">
          <img className="SideMenu-img" src={humanMuscle}  alt="" />
          <img className="SideMenu-img" src={humanSkeleton} alt="" />
          <img className="SideMenu-img-notes" src={humanBrain} alt="" />
          <img className="SideMenu-img-notes" src={humanHeart} alt="" />
          <img className="SideMenu-img-notes" src={humanBoot} alt="" />

          <NavLink className="SideMenu-button-brain" to="/headnotes" />
          <Button className="SideMenu-button-heart"/>
          <Button className="SideMenu-button-boot"/>
        </div>
        {baton}

      </>
    );
  }
};


// activeFn = e => {
//   e.target.className === 'active' ? e.target.className = 'unActive' : e.target.className = 'active'
// }

// <div onClick={this.activeFn} className='unActive' >

// <div className={classnames('A', 'B', { 'C--a': this.state.isActive }) />