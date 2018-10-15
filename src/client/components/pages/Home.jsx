import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import withStyles from '@material-ui/core/styles/withStyles'

import fakeData from 'client/fakeData'
import Header from 'client/components/Header'
import WorkList from 'client/components/WorkList'
import Case from 'client/components/Case'

class Home extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
        console.log('nameUrl', nameUrl)
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
        console.log('nameUrl', nameUrl)
    }

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
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
                </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup 
                        transitionName='animOpacityLong'                        
                        transitionAppear={true}
                        transitionAppearTimeout={2900}
                        transitionEnter={true}
                        transitionEnterTimeout={2900}
                        transitionLeave={true}
                        transitionLeaveTimeout={2900}
                    >                     
                        <WorkList items={fakeData}/> 
                    </ReactCSSTransitionGroup>
                {nameUrl && <Case nameUrl={nameUrl}/>}
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