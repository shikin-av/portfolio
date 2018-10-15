import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'babel-polyfill'
//import device from 'current-device'

import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import grey from '@material-ui/core/colors/grey'
import reducers from 'client/data/reducers/admin'
import AdminRouter from 'client/components/routes/AdminRouter'
import 'client/style.css'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(historyMiddleware, thunk)))

const AdminApp = () => (
    <div>
        <CssBaseline/>
        <AdminRouter/>
    </div>
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <AdminApp/>
        </Router>
    </Provider>,
    document.getElementById('root')
)