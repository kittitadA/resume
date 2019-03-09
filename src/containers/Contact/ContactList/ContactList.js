import React from 'react';

import classes from './ContactList.css';

const ContactList = (props) => {
        return (
          <li className={classes.ListContact_li}>
                <i className={props.class_i}></i>
                    <div className={classes.Address}>{props.children}</div>
          </li>
        );
}



export default ContactList;
