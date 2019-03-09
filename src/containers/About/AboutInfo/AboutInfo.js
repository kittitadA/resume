import React from 'react';

import classes from './AboutInfo.css';

const AboutInfo = (props) => {
        return (
          <li className={classes.About_li}><p><b>{props.title} :</b>&nbsp;{props.content}</p></li>
        );
}

export default AboutInfo;
