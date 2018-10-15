import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import withStyles from '@material-ui/core/styles/withStyles'

import fakeData from 'client/fakeData'
import Header from 'client/components/Header'
import WorkList from 'client/components/WorkList'
import Case from 'client/components/Case'

class Admin extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
        console.log('nameUrl', nameUrl)
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
        console.log('nameUrl', nameUrl)
    }

    save = work => {
        console.log('SAVE')
    }

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
        return (
            <div className={classes.root}>    
                <div className={classes.header}>
                    <h2>Режим Редактирования</h2>
                </div>                            
                <WorkList items={fakeData}/>                 
                {
                    nameUrl && 
                    <Case 
                        nameUrl={nameUrl} 
                        save={this.save}     //TODO
                    />
                }
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
    },
    header: {
        padding: '7%',        
        textAlign: 'center',
    }
})

export default withStyles(styles)(Admin)