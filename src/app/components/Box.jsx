import React from 'react'
import classes from '../assets/css/box.module.css'
const Box = ({ children, style, className }) => {
    return (
        <div className={classes['box'] + ' ' + className} style={style}>
            {children}
        </div>
    )
}

export default Box