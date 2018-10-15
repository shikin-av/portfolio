import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createHashHistory'
import {ConnectedRouter as Router, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'babel-polyfill'
//import device from 'current-device'

import CssBaseline from '@material-ui/core/CssBaseline'


import 'client/style.css'
import reducers from 'client/data/reducers/site'
import SiteRouter from 'client/components/routes/SiteRouter'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(historyMiddleware, thunk)))

const App = () => (
    <div>
        <CssBaseline/>
        <SiteRouter/>
    </div>
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)