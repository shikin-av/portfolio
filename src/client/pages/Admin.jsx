import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import {worksFake} from 'client/fakeData'
//import administrator from 'client/data/administrator'
import Header from 'client/components/Header'
import WorkList from 'client/components/Work/WorkList'
import Work from 'client/components/Work/Work'
import WorkAdmin from 'client/components/Work/WorkAdmin'

class Admin extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
    }

    save = work => {
        console.log('SAVE', work)
    }  

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
        const createWork = {
            miniature:      'create_mini.png',
            nameUrl:        'create',
            description:    'Добавить кейс',
            miniatureHeight: 268,
        }

        return (
            <div className={classes.root}>    
                <div className={classes.header}>
                    <h2>Режим Редактирования</h2>
                </div>                            
                <WorkList items={[...worksFake, createWork]}/>                 
                {
                    nameUrl && 
                    <WorkAdmin 
                        nameUrl={nameUrl} 
                        save={this.save}
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