import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.css';
import LogoPic from '../../asset/Icon/LogoMakr_6Qvxr0.png';

const Logo = () => {
    return (
            <NavLink exact to="/resume">
                  <img className={classes.Logo}
                      src={LogoPic} alt="LogoPic">
                  </img>
            </NavLink>
    );
}

export default Logo;
