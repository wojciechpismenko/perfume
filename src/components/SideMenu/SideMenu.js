import React          from 'react';

import humanMuscle    from '../../assets/images/human_muscle.png';
import humanSkeleton  from '../../assets/images/human_skeleton.png';
import humanBrain     from '../../assets/images/human_brain.png';
import humanHeart     from '../../assets/images/human_heart.png';
import humanBoot      from '../../assets/images/human_boot.png';

import Button         from '../Button/Button';
import './SideMenu.scss';

export default class SideMenu extends React.Component {
  // state = {
  //   activeNotes: { notes },
  // }

  // const element = document.querySelector('.button-test');

  // element.addEventListener('mousemove', function(e) {
  //     this.style.setProperty('--left', e.pageX - this.offsetLeft + "px");
  //     this.style.setProperty('--top', e.pageY - this.offsetTop + "px");
  // })


  // const element = document.querySelector('.SideMenu-img-humanMuscle');

  // element.addEventListener('mousemove', function(e) {
  //   this.style.setProperty('--left', e.pageX - this.offsetLeft + "px");
  //   this.style.setProperty('--top', e.pageY - this.offsetTop + "px");
  // })


  // document.querySelector('.SideMenu-img-humanMuscle').onmousemove = (e) => {
  //   const x = e.pageX - e.target.offsetLeft;
  //   const y = e.pageY - e.target.offsetTop;

  //   e.target.style.setProperty('--x', `${x}px`)
  //   e.target.style.setProperty('--y', `${y}px`)
  // }

  xRey = () => {
    const element = document.querySelector('.button-test');

    element.addEventListener('mousemove', function (e) {
      this.style.setProperty('--left', e.pageX - this.offsetLeft + "px");
      this.style.setProperty('--top', e.pageY - this.offsetTop + "px");
    })
  }

  render() {
    // const { notes } = this.props;

    return (
      <>
        <div className="SideMenu">
          <img className="SideMenu-img" src={humanMuscle}  alt="" />
          <img className="SideMenu-img" src={humanSkeleton} alt="" />
          <img className="SideMenu-img-notes" src={humanBrain} alt="" />
          <img className="SideMenu-img-notes" src={humanHeart} alt="" />
          <img className="SideMenu-img-notes" src={humanBoot} alt="" />

          <Button className="SideMenu-button-brain"/>
          <Button className="SideMenu-button-heart"/>
          <Button className="SideMenu-button-boot"/>

        </div>

        <button type="button" className="button-test">
          <span>KLIK</span>
          { this.xRey() }
        </button>

      </>
    );
  }
};


// activeFn = e => {
//   e.target.className === 'active' ? e.target.className = 'unActive' : e.target.className = 'active'
// }

// <div onClick={this.activeFn} className='unActive' >

// <div className={classnames('A', 'B', { 'C--a': this.state.isActive }) />