import React, { Fragment } from 'react';

import classes from './Layout.module.css';

const layout = (props) => (
    <Fragment>
        <div>[Toolbar, Side Drawer, Backdrop]</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;
