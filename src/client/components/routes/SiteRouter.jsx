import React from 'react'
import {Switch, Route} from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'

import Home from 'client/components/pages/Home.jsx'
import Login from 'client/components/pages/Login.jsx'
import Page404 from 'client/components/pages/Page404.jsx'

const SiteRouter = props => (
    <Switch className={props.classes.root}>
        <Route 
            exact path='/login'
            component={Login}
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