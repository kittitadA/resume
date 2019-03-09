import React from 'react';

import Aux from '../../hoc/Auux/Auux';
import classes from './Card.css';

const card = (props) => {

    const prog = {
        width: props.width,
        height: '100%',
        color: 'white',
        borderRadius: '3px',
        backgroundColor: 'salmon'
    };

    return (
      <Aux>
          <div className={classes.Card}>
              <img className={classes.Icon_img}
                    src={props.select}
                    alt={props.select}></img>
              <h5>{props.cardTitle}</h5>
              <div className={classes.Border_progress}>
                  <div className={classes.Progress_bar}
                       style={prog}>{props.width}</div>
              </div>
          </div>
      </Aux>
    );
};

export default card;
