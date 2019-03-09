import React,{ Component } from 'react';

import classes from './About.css';
import AboutInfo from './AboutInfo/AboutInfo';
import image_profile from '../../asset/Image/Image_profile.jpg';

class About extends Component {
    render() {
        return (
                <div className={classes.Content}>
                    <ul className={classes.About_ul}>
                        <li className={classes.About_li}>
                            <h3>KITTITAD AUTHISANON</h3>
                            <h5>FRONTEND DEVELOPE</h5>
                            <p>Hello, I’m Kittitad Authisanon.I'm interested in
                             front-end development and I ready to learn new things.</p>

                            <ul className={classes.About_ul}>
                                <AboutInfo title="Date of birth" content="11 November 1994"/>
                                <AboutInfo title="Age" content="25"/>
                                <AboutInfo title="Religion " content="Buddhist"/>
                                <AboutInfo title="Phone" content="080-544-2850"/>
                                <AboutInfo title="Email" content="Kittitad.taz@gmail.com"/>
                                <AboutInfo title="Website" content="https://github.com/kittitadA"/>
                            </ul>
                        </li>
                        <li className={classes.About_li_image}>
                                <img className={classes.Image_profile}
                                     src={image_profile} alt="Image_profile"></img>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default About;
