import React          from 'react';
import { NavLink, Route, Switch, BrowserRouter }    from 'react-router-dom';

import humanMuscle    from '../../assets/images/human_muscle.png';
import humanSkeleton  from '../../assets/images/human_skeleton.png';
import humanBrain     from '../../assets/images/human_brain.png';
import humanHeart     from '../../assets/images/human_heart.png';
import humanBoot      from '../../assets/images/human_boot.png';

import './SideMenu.scss';

export default class SideMenu extends React.Component {


  render() {

    // const SideMenuMuscle = (<img className="SideMenu-muscle" src={humanMuscle} alt="" />);
    // const SideMenuSkeleton = (<img className="SideMenu-skeleton" src={humanSkeleton} alt="" />);
    // const SideMenuBrain = (<img className="SideMenu-notes" src={humanBrain} alt="" />);
    // const SideMenuHeart = (<img className="SideMenu-notes" src={humanHeart} alt="" />);
    // const SideMenuBoot = (<img className="SideMenu-notes" src={humanBoot} alt="" />);


    return (
      <div className="SideMenu">
        <NavLink activeClassName="SideMenu-navActive" exact to="/" name="Root">
          <div className="SideMenu-button">
            <img className="SideMenu-muscle" src={humanMuscle} alt="" />
          </div>
        </NavLink>
        <NavLink activeClassName="SideMenu-navActive" to="/headnotes" name="HeadNotes">
          <div className="SideMenu-button">
            <div className="SideMenu-button-brain" />
            <img className="SideMenu-skeleton" src={humanSkeleton} alt="" />
            <img className="SideMenu-notes" src={humanBrain} alt="" />
          </div>
        </NavLink>
        <NavLink activeClassName="SideMenu-navActive" to="/heartnotes" name="HeartNotes">
          <div className="SideMenu-button">
            <div className="SideMenu-button-heart" />
            <img className="SideMenu-skeleton" src={humanSkeleton} alt="" />
            <img className="SideMenu-notes" src={humanHeart} alt="" />
          </div>
        </NavLink>
        <NavLink activeClassName="SideMenu-navActive" to="/basenotes" name="BaseNotes">
          <div className="SideMenu-button">
            <div className="SideMenu-button-boot" />
            <img className="SideMenu-skeleton" src={humanSkeleton} alt="" />
            <img className="SideMenu-notes" src={humanBoot} alt="" />
          </div>
        </NavLink>
      </div>
    );
  }
};


// const SideMenuImage = (
    //   <div className="SideMenu-img" alt="" >
    //     <img className="SideMenu-muscle" src={humanMuscle} alt="" />
    //     <img className="SideMenu-skeleton" src={humanSkeleton} alt="" />
    //     <img className="SideMenu-notes" src={humanBrain} alt="" />
    //     <img className="SideMenu-notes" src={humanHeart} alt="" />
    //     <img className="SideMenu-notes" src={humanBoot} alt="" />
    //   </div>
    // );

// const SideMenuMuscle = (<img className="SideMenu-muscle" src={humanMuscle} alt="" />);
// const SideMenuSkeleton = (<img className="SideMenu-skeleton" src={humanSkeleton} alt="" />);
// const SideMenuBrain = (<img className="SideMenu-notes" src={humanBrain} alt="" />);
// const SideMenuHeart = (<img className="SideMenu-notes" src={humanHeart} alt="" />);
// const SideMenuBoot = (<img className="SideMenu-notes" src={humanBoot} alt="" />);


{/* <div className="SideMenu" >
          {SideMenuImage}
        </div> */}


{/* <Route exact path="/" component={SideMenuMuscle} />
            <Route path="/" component={SideMenuSkeleton} />
            <Route path="/headnotes" component={SideMenuBrain} />
            <Route path="/heartnotes" component={SideMenuHeart} />
            <Route path="/basenotes" component={SideMenuBoot} /> */}

{/* <div className="SideMenu">
  <img className="SideMenu-muscle" src={humanMuscle} alt="" />
  <img className="SideMenu-skeleton" src={humanSkeleton} alt="" />
  <img className="SideMenu-notes" src={humanBrain} alt="" />
  <img className="SideMenu-notes" src={humanHeart} alt="" />
  <img className="SideMenu-notes" src={humanBoot} alt="" />

  <NavLink className="SideMenu-button-brain" to="/headnotes" />
  <NavLink className="SideMenu-button-heart" to="/heartnotes" />
  <NavLink className="SideMenu-button-boot" to="/basenotes" />
</div> */}

  // componentWillUnmount() {
  //   this.buttonNode.removeEventListener('mousemove', this.onMouseMove);
  // }

  // onMouseMove = (evt) => {
  //   this.buttonNode.style.setProperty('--left', evt.pageX - evt.target.offsetLeft + 'px');
  //   this.buttonNode.style.setProperty('--top', evt.pageY - evt.target.offsetTop + 'px');
  // }

  // getRef = (buttonNode) => {
  //   buttonNode.addEventListener('mousemove', this.onMouseMove);
  //   this.buttonNode = buttonNode;
  // }