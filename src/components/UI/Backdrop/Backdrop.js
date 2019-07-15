import React from 'react'

import classes from './Backdrop.module.css'

export default function Backdrop(props) {
    return props.shouldShow ? 
        <div 
            className={classes.Backdrop}
            onClick={props.clicked}>
        </div>: null;
}
