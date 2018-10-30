import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import {worksFake} from 'client/fakeData'
import WorkList from 'client/components/Work/WorkList'
import WorkAdmin from 'client/components/Work/WorkAdmin'
import config from 'config/client'

class Admin extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
    }

    render() {
        const {classes} = this.props
        const {nameUrl} = this.props.match.params
        const createWork = {
            miniature:      `${config.assetsPath}/imgs/design/create_mini.png`,
            nameUrl:        'create',
            description:    'Добавить кейс',
            miniatureHeight: 268,
        }

        return (
            <div className={classes.root}>    
                <div id={'homeContent'}>
                    <div className={classes.header}>
                        <h2>Режим Редактирования</h2>
                    </div>                            
                    <WorkList items={[...worksFake, createWork]}/>                 
                </div>
                {
                    nameUrl && 
                    <WorkAdmin nameUrl={nameUrl}/>
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