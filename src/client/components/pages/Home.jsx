import React from 'react'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import withStyles from '@material-ui/core/styles/withStyles'

import fakeData from 'client/fakeData'
import Header from 'client/components/Header'
import Works from 'client/components/Works'

class Home extends React.Component {    

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <ReactCSSTransitionGroup 
                    transitionName='animOpacity'                        
                    transitionAppear={true}
                    transitionAppearTimeout={1900}
                    transitionEnter={true}
                    transitionEnterTimeout={1900}
                    transitionLeave={true}
                    transitionLeaveTimeout={1900}
                > 
                    <Header/>
                    <Works items={fakeData}/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}    

const styles = () => ({
    root: {        
        color: 'rgba(255, 255, 255, 0.65)',
        maxWidth: '68em',
        width: '100%',
        margin: '0 auto',
        padding: '0 2em',
        opacity: 1,
        filter: 'none',
        transition: 'opacity 1s ease, filter 1s ease',
    },
})

export default withStyles(styles)(Home)