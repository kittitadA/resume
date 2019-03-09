import React, { Component } from 'react';

import classes from './Layout.css'
import Aux from '../Auux/Auux';
import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} />
                    <main>
                        <div className={classes.Container}>
                        {this.props.children}
                        </div>
                    </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;
