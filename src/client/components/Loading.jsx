import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = props => (
    <CircularProgress className={props.classes.root}/>
)

const styles = () => ({
    root: {
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
    }
})

export default withStyles(styles)(Loading)