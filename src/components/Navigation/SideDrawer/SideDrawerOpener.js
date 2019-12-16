import React from 'react'
import classes from './SideDrawerOpener.module.css'

const SideDrawerOpener = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default SideDrawerOpener;