import React, { Fragment } from 'react';

const layout = (props) => (
    <Fragment>
        <div>[Toolbar, Side Drawer, Backdrop]</div>
        <main>
            {props.children}
        </main>
    </Fragment>
);

export default layout;
