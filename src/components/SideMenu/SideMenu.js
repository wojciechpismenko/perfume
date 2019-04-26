import React          from 'react';

import humanMuscle    from '../../assets/images/human_muscle.png';
import humanSkeleton  from '../../assets/images/human_skeleton.png';
import humanBrain     from '../../assets/images/human_brain.png';
import humanHeart     from '../../assets/images/human_heart.png';
import humanBoot      from '../../assets/images/human_boot.png';

import Button         from '../Button/Button';
import './SideMenu.scss';

export default class SideMenu extends React.Component {
  state = {
    // activeNotes: { notes },
  }

  // notesFn = () => {
  //   return ("SideMenu-notes")
  // }


  render() {
    const { notes } = this.props;
    return (
      <>
        <div className="SideMenu">
          <img className="SideMenu-img" src={humanMuscle} alt="" />
          <img className="SideMenu-img" src={humanSkeleton} alt="" />
          <img className="SideMenu-img-notes" src={humanBrain} alt="" />
          <img className="SideMenu-img-notes" src={humanHeart} alt="" />
          <img className="SideMenu-img-notes" src={humanBoot} alt="" />

          <Button className="SideMenu-button-brain"/>
          <Button className="SideMenu-button-heart"/>
          <Button className="SideMenu-button-boot"/>

        </div>
      </>
    );
  }
};


// activeFn = e => {
//   e.target.className === 'active' ? e.target.className = 'unActive' : e.target.className = 'active'
// }

// <div onClick={this.activeFn} className='unActive' >

// <div className={classnames('A', 'B', { 'C--a': this.state.isActive }) />