import React from 'react'
import {Switch, Route} from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'

import Home from 'client/pages/Home.jsx'
import Login from 'client/pages/Login.jsx'
import Page404 from 'client/pages/Page404.jsx'

const SiteRouter = props => (
    <Switch className={props.classes.root}>
        <Route 
            exact path='/login'
            component={Login}
        />
        <Route
            exact path='/404'
            component={Page404}
        /> 
        <Route
            exact path='/:nameUrl?'
            component={Home}
        />                
        <Route component={Page404}/>
    </Switch>   
)

const styles = () => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
    },
})

export default withStyles(styles)(SiteRouter)