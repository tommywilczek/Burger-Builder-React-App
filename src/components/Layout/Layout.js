import React, { Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

export default function Layout(props) {
    return (
        <Fragment>
            <Toolbar />
            <div>[Side Drawer]</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
}
