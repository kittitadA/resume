import React from 'react';

import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import Navbars from '../Navbars/Navbars';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (

    <header>
        <div className={classes.Toolbar}>
          <Logo />
          <DrawerToggle  clicked={props.drawerToggleClicked}/>
          <Navbars />
        </div>
    </header>
);

export default toolbar;
