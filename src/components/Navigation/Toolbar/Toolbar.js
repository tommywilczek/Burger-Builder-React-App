import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuButton from '../MenuButton/MenuButton'

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <MenuButton shouldShow={props.showSideDrawer}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}
