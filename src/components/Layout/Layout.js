import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
    state = {
        shouldShowSideDrawer: false
    }

    // This is not the right way! By setting state like this, your current state might
    //  be ahead of the state this funciton is looking at.
    // toggleSideDrawer = () => {
    //     this.setState({ shouldShowSideDrawer: !this.state.shouldShowSideDrawer });
    // }
//  And this is the CLEAN way of setting the state when it depends on the old state:
    toggleSideDrawer = () => {
        this.setState( ( prevState ) => {
            return { shouldShowSideDrawer: !prevState.shouldShowSideDrawer };
        } );
    }
    render () {
        return(
            <Fragment>
                <Toolbar 
                    showSideDrawer={this.toggleSideDrawer}/>
                <SideDrawer 
                    shouldShow={this.state.shouldShowSideDrawer}
                    close={this.toggleSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}
