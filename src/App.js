import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Home/Homepage';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Skill from './containers/Skill/Skill';
import Education from './containers/Education/Education';

class App extends Component {
  render() {
    return (
        <Layout>
             <Route exact path="/resume" component={Homepage} />
             <Route path="/resume/About" component={About} />
             <Route path="/resume/Skill" component={Skill} />
             <Route path="/resume/Contact" component={Contact} />
             <Route path="/resume/Education" component={Education} />
        </Layout>
    );
  }
}

export default App;
