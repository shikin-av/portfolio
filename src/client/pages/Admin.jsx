import React from 'react'
import {connect} from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'

//import {worksFake} from 'client/fakeData'
import WorkList from 'client/components/Work/WorkList'
import WorkAdmin from 'client/components/Work/WorkAdmin'
import config from 'config/client'

import {getWorks as getWorksSelector} from 'client/data/selectors/admin'
import {
    getWorks    as getWorksAction,
    //appendWork  as appendWorkAction,
    //editWork    as editWorkAction,
    //deleteWork  as deleteWorkAction,
} from 'client/data/actions/admin'

class Admin extends React.Component {    

    componentWillMount = () => {
        const {nameUrl} = this.props.match.params
    }

    componentDidMount = () => {
        const {getWorksAction} = this.props
        getWorksAction()
    }

    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps.match.params
    }

    render() {
        const {classes, works} = this.props
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
                    <WorkList items={[...works, createWork]}/>                 
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

const mapStateToProps = state => ({
    works: getWorksSelector(state),
})

const mapDispatchToProps = {
    getWorksAction,
    //appendWorkAction,
    //editWorkAction,
    //deleteWorkAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Admin))