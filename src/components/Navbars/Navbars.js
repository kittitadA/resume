import React from 'react';

import Navbar from './Navbar/Navbar';
import classes from './Navbars.css';

const navbars = () => (
          <ul className={classes.Navbars}>
              <Navbar exact link="/resume">Home</Navbar>
              <Navbar link="/resume/About">About</Navbar>
              <Navbar link="/resume/Skill">Skill</Navbar>
              <Navbar link="/resume/Education">Education</Navbar>
              <Navbar link="/resume/Contact">Contact</Navbar>
          </ul>
);

export default navbars;
