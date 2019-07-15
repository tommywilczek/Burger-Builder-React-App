import React, { Fragment } from 'react'
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.shouldShow) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    attachedClasses = attachedClasses.join(' ');
    return (
        <Fragment>
            <Backdrop 
                shouldShow={props.shouldShow} 
                clicked={props.close}    
            />
            <div className={attachedClasses}>
                <div className={classes.Logo}> 
                    {/* Will overwrite the Logo styles from the logo component 
                        because Css Modules creates a unique class for each className*/}
                    <Logo  />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default SideDrawer
