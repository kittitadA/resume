import React,{ Component } from 'react';

import classes from './Homepage.css';

class Homepage extends Component {
    render() {
        return (
                <div className={classes.Content}>
                    <h1>Frontend Develope<br></br>React A JavaScript library</h1>
                    <p>Hello, I’m Kittitad Authisanon. I'm interested in
                     front-end development and I ready to learn new things.</p>
                </div>
        );
    }
}

export default Homepage;
