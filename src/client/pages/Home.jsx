import React from 'react'
import Animation from 'client/components/common/Animation'

import withStyles from '@material-ui/core/styles/withStyles'

import {worksFake} from 'client/fakeData'
import Header from 'client/components/Header'
import WorkList from 'client/components/Work/WorkList'
import Work from 'client/components/Work/Work'

class Home extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
    }

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
        return (
            <div className={classes.root}>                
                <div id={'homeContent'}>
                    <Animation animationCssClass='animOpacity'>
                        <Header/>
                    </Animation>      
                    <Animation 
                        animationCssClass='animOpacityLong' 
                        time={2900}
                    >                
                        <WorkList items={worksFake}/> 
                    </Animation>  
                </div>
                {nameUrl && <Work nameUrl={nameUrl}/>}
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