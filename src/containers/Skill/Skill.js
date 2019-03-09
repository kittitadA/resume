import React,{ Component } from 'react';

import classes from './Skill.css';
import Aux from '../../hoc/Auux/Auux';
import Card from '../../components/Card/Card';
import html_image from '../../asset/Icon/html5-brands.svg';
import css_image from '../../asset/Icon/css3-alt-brands.svg';
import js_image from '../../asset/Icon/js-square-brands.svg';
import react_image from '../../asset/Icon/react-brands.svg';
import sass_image from '../../asset/Icon/sass-brands.svg';
import git_image from '../../asset/Icon/git-square-brands.svg';
import nodejs_image from '../../asset/Icon/node-js-brands.svg';
import php_image from '../../asset/Icon/php-brands.svg';

class Skill extends Component {
    render() {
        return (
                <Aux>
                    <div className={classes.Content}>
                        <h2>TECHNOLOGY</h2>
                        <ul className={classes.Card_skill_ul}>
                            <li className={classes.Card_skill_li}>
                                <Card select={html_image}
                                      cardTitle="HTML"
                                      width="50%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={css_image}
                                      cardTitle="CSS"
                                      width="50%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={js_image}
                                      cardTitle="JAVASCRIPT"
                                      width="50%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={react_image}
                                      cardTitle="REACT"
                                      width="50%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={sass_image}
                                      cardTitle="SASS"
                                      width="25%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={git_image}
                                      cardTitle="GIT"
                                      width="25%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={nodejs_image}
                                      cardTitle="NODEJS"
                                      width="30%"/>
                            </li>
                            <li className={classes.Card_skill_li}>
                                <Card select={php_image}
                                      cardTitle="PHP"
                                      width="25%"/>
                            </li>
                          </ul>
                    </div>
                </Aux>
        );
    }
}

export default Skill;
