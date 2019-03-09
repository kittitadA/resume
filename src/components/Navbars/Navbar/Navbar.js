import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.css';

const navbar = (props) => (
    <li className={classes.Navbar}>
        <NavLink to={props.link}
                 exact={props.exact}
                 activeClassName={classes.is_active}
                 className={classes.navbar_item}>{props.children}
        </NavLink>
    </li>
);

export default navbar;
