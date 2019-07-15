import React from 'react'

import classes from './Backdrop.module.css'

export default function Backdrop(props) {
    return props.modalIsShowing ? 
        <div 
            className={classes.Backdrop}
            onClick={props.clickedBackdrop}>
        </div>: null;
}
