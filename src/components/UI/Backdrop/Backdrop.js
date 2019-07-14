import React from 'react'

import classes from './Backdrop.module.css'

export default function Backdrop(props) {
    props.show ? <div className={classes.Backdrop}></div>: null;
}
