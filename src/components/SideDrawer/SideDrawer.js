import React from 'react';

import classes from './SideDrawer.css';
import Aux from '../../hoc/Auux/Auux';
import Backdrop from '../UI/Backdrop/Backdrop';
import Navbar from '../Navbars/Navbar/Navbar';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <ul className={classes.Navbars}>
                    <Navbar exact link="/">Home</Navbar>
                    <Navbar link="/About">About</Navbar>
                    <Navbar link="/Skill">Skill</Navbar>
                    <Navbar link="/Education">Education</Navbar>
                    <Navbar link="/Contact">Contact</Navbar>
                </ul>
            </div>
        </Aux>
    );
};

export default sideDrawer;
