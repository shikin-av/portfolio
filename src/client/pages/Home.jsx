import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

//import {worksFake} from 'client/fakeData'
import Animation from 'client/components/common/Animation'
import Header from 'client/components/Header'
import WorkList from 'client/components/Work/WorkList'
import Work from 'client/components/Work/Work'
import WorkFilter from 'client/components/Work/WorkFilter'
import Message from 'client/components/common/Message'
import LoadingSpin from 'client/components/common/LoadingSpin'

import {getWorks as getWorksApi} from 'client/data/api/site'

class Home extends React.Component {    
    state = {
        works:   null,
        message: null,
    }

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
    }

    componentDidMount = async () => {        
        try {
            const works = await getWorksApi()
            if(!works.error){
                this.setState({works})
            } else {
                this.openMessage({
                    message: 'Не удалось загрузить кейсы',
                    type: 'warning',
                })
            }
        } catch(err) {
            this.openMessage({
                message: 'Не удалось загрузить кейсы',
                type: 'warning',
            })
        }        
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
    }

    openMessage = ({message, type}) => {
        const properties = {message, type}
        this.setState({
            message: <Message {...properties}/>
        })
    }

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
        const {
            works,
            message,
        } = this.state
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
                        {
                            works
                            ? <WorkFilter works={works}/> 
                            : <LoadingSpin/>
                        }
                        
                    </Animation>  
                </div>
                {nameUrl && <Work nameUrl={nameUrl}/>}
                {message}
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