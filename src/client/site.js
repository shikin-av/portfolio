import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createHashHistory'
import {ConnectedRouter as Router, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'babel-polyfill'
import device from 'current-device'

import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import Button from '@material-ui/core/Button'

//import 'client/style.css'
import reducers from 'client/reducers'
import ContentRouter from 'client/components/routes/SiteRouter'
import PageBuilder from 'client/components/SimplePageBuilder'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(historyMiddleware, thunk)))

const defaultTheme = createMuiTheme({
    palette: {
        primary:   {main: grey[500]},
        secondary: {main: grey[300]},
        background:       grey[50],
        contrast:         grey[700],
        menuBackground:   grey[100],
        menuText:         grey[700],
    },
})
const blueTheme = createMuiTheme({
    palette: {
        primary:   {main: blue[500]},
        secondary: {main: blue[300]},
        background:       blue[50],
        contrast:         blue[700],
        menuBackground:   blue[100],
        menuText:         blue[700],
    },
})

window.theme = defaultTheme

const App = props => (
    <MuiThemeProvider theme={window.theme}>
        <CssBaseline/>
        <ContentRouter/>
    </MuiThemeProvider>
)
/*const App2 = props => (    
    <MuiThemeProvider theme={window.theme}>
        <Button variant='contained' color="primary">Theme1</Button>
        
        <MuiThemeProvider theme={blueTheme}>
            <Button 
                variant='contained' 
                color="primary"
                onClick={()=>{window.theme = blueTheme}}
            >Theme2</Button>
        </MuiThemeProvider>
    </MuiThemeProvider>
)*/
class App3 extends React.Component {
    state = {
        theme: defaultTheme,
    }

    changeTheme = () => {
        this.setState({
            theme: blueTheme
        })
    }

    save = rows => {
        console.log('SAVE', rows)
    }

    getPageRows = () => {
        return []
    }

    render(){
        const {theme} = this.state
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <ContentRouter/>
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={this.changeTheme}
                >Theme1</Button>
                <PageBuilder
                    saveHandler={this.save}
                    menu={true}
                    mode='edit'
                    getPageRows={this.getPageRows}
                    theme={theme}
                />
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)