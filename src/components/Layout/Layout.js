import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
    state = {
        shouldShowSideDrawer: false
    }

    openSideDrawer = () => {
        this.setState({ shouldShowSideDrawer: true });
    }

    closeSideDrawer = () => {
        this.setState({ shouldShowSideDrawer: false });
    }
    render () {
        return(
            <Fragment>
                <Toolbar 
                    showSideDrawer={this.openSideDrawer}/>
                <SideDrawer 
                    shouldShow={this.state.shouldShowSideDrawer}
                    close={this.closeSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}
