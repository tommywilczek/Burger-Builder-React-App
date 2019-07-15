import React, { Fragment, Component } from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

export default class Modal extends Component {
    shouldComponentUpdate(nextprops, nextState) {
        if (nextprops.show !== this.props.show) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUpdate() {
        console.log('[Modal] will update');
    }
    render () {
        return (
            <Fragment>
                <Backdrop 
                    shouldShow={this.props.show} 
                    clicked={this.props.close}    
                />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}
