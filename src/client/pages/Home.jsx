import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Animation from 'client/components/common/Animation'
import Header from 'client/components/Header'
import Work from 'client/components/Work/Work'
import WorkFilter from 'client/components/Work/WorkFilter'
import Message from 'client/components/common/Message'
import LoadingSpin from 'client/components/common/LoadingSpin'
import showHomeContent from 'client/components/common/showHomeContent'

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
        showHomeContent(true)  
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
        showHomeContent(true)
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
                    <Animation animationCssClass='animOpacityLong' time={2900}>
                        <Header/> 
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
    link: {
        fontSize: '1.2rem',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 20,
        display: 'block',
        color: 'white',
    }
})

export default withStyles(styles)(Home)