import React, {Component} from  'react'
import {connect} from 'react-redux'
import Aux from '../Aux/Aux'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerOpenHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated} 
                    show={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.idToken !== null 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);