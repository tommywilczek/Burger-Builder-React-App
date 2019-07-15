import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../DrawerToggle/DrawerToggle'

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle show={props.showSideDrawer}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.NavigationItems}>
                <NavigationItems />
            </nav>
        </header>
    )
}
