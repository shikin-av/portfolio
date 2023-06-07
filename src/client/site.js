import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import 'babel-polyfill'
import 'whatwg-fetch'
import CssBaseline from '@material-ui/core/CssBaseline'


import 'client/style.css'
import SiteRouter from 'client/routes/SiteRouter'

const App = () => (
    <div>
        <CssBaseline/>
        <SiteRouter/>
    </div>
)

ReactDOM.render(    
    <HashRouter>
        <App/>
    </HashRouter>,    
    document.getElementById('root')
)