import React from 'react';

import classes from './EduContent.css';

const eduContent = (props) => (
      <li className={classes.Layout}>
          <div className={classes.Year}><h4>{props.year}</h4></div>
          <div className={classes.Line}><div></div></div>
          <div className={classes.Content}><h3>{props.place}</h3>
              <p>{props.content}</p>
          </div>
      </li>
);

export default eduContent;
