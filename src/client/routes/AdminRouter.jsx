import React from 'react'
import {Switch, Route} from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'

import Admin from 'client/pages/Admin.jsx'
import Page404 from 'client/pages/Page404.jsx'

const AdminRouter = props => (
    <Switch className={props.classes.root}>        
        <Route
            exact path='/:nameUrl?'
            component={Admin}
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

export default withStyles(styles)(AdminRouter)