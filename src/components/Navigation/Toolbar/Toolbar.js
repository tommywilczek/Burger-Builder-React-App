import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                [links here]
            </nav>
        </header>
    )
}
