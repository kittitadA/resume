import React,{ Component } from 'react';

import classes from './Education.css';
import EduContent from './EduContent/EduContent';

class Education extends Component {
    render() {
        return (
                <div className={classes.Content}>
                <h2>EDUCATION</h2>
                    <ul>
                        <EduContent
                            year="2005 - 2008"
                            place="Padang Tinsulanonda"
                            content="Junior high school"/>
                        <EduContent
                            year="2009 - 2012"
                            place="Hatyai Technical College"
                            content="Electronic"/>
                        <EduContent
                            year="2013 - 2018"
                            place="Rajamangala University of Technology Srivijaya"
                            content="Computer Engineer"/>
                    </ul>
                </div>
        );
    }
}

export default Education;
