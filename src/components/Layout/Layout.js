import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
    state = {
        shouldShowSideDrawer: false
    }

    toggleSideDrawer = () => {
        this.setState({ shouldShowSideDrawer: !this.state.shouldShowSideDrawer });
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
