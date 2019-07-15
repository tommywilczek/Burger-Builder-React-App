import React, { Fragment } from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

export default function Modal(props) {
    return (
        <Fragment>
            <Backdrop 
                shouldShow={props.show} 
                clicked={props.modalClosed}    
            />
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.show ? '1': '0'
                }}>
                {props.children}
            </div>
        </Fragment>
    )
}
