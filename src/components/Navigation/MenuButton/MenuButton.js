import React from 'react'

const MenuButton = (props) => {
    return (
        <div>
            <p onClick={props.shouldShow}>MENU</p>
        </div>
    )
}

export default MenuButton
