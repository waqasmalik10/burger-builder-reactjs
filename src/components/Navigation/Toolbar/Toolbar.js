import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo height="50%"/>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;