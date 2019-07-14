import React, { Fragment } from 'react'

import classes from './Layout.module.css'

export default function Layout(props) {
    return (
        <Fragment>
            <div>[Toolbar, Side Drawer, Backdrop]</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
}
