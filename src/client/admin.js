import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'babel-polyfill'
import device from 'current-device'

//import ContentRouter from 'client/components/Router.jsx'
import reducers from 'client/reducers'
import 'client/style.css'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(historyMiddleware, thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <h1>i admin</h1>
        </Router>
    </Provider>,
    document.getElementById('root')
)