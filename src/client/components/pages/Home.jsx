import React from 'react'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import withStyles from '@material-ui/core/styles/withStyles'

import fakeData from 'client/fakeData'
import Header from 'client/components/Header'
import WorkList from 'client/components/WorkList'
import Case from 'client/components/Case'

class Home extends React.Component {    

    componentWillMount = () => {
        const {nameurl} = this.props.match.params
        console.log('nameurl', nameurl)
    }

    componentWillReceiveProps = nextProps => {
        const {nameurl} = nextProps.match.params
        console.log('nameurl', nameurl)
    }

    render() {
        const {classes} = this.props
        const {nameurl} = this.props.match.params
        return (
            <div className={classes.root}>
                <ReactCSSTransitionGroup 
                    transitionName='animOpacity'                        
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnter={true}
                    transitionEnterTimeout={2000}
                    transitionLeave={true}
                    transitionLeaveTimeout={2000}
                > 
                    <Header/>
                    <WorkList items={fakeData}/>                    
                </ReactCSSTransitionGroup>
                {nameurl && <Case nameurl={nameurl}/>}
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