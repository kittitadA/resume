import React from 'react';

import classes from './FooterList.css';

const footerList = (props) => {
    return (
                  <div className={classes.Content}>
                      <h4>{props.title}</h4>
                      <p>{props.line_1}<br></br>{props.line_2}</p>
                      {props.children}
                  </div>
    );
};

export default footerList;
