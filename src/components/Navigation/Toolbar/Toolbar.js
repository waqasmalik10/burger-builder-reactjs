import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerOpener from '../SideDrawer/SideDrawerOpener'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerOpener clicked={props.clicked} />
        <Logo height="50%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems 
                isAuthenticated={props.isAuth} />
        </nav>
    </header>
)

export default toolbar;