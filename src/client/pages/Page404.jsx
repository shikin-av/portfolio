import React from 'react'
import Link from 'react-router-dom/Link'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

const Page404 = ({classes, history}) => (
    <div className={classes.root}>
    <h1>404</h1>
    <h3>Данной страницы не существует</h3>
    <Button
        variant='contained'
        onClick={ () => history.goBack() }
        className={classes.button}
    >
        Назад
    </Button>
    </div>
)

const styles = () => ({
    root: {
        top: '40%',
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
        position: 'fixed',
        textAlign: 'center',
    },    
    button: {
        marginTop: 16,
        width: '98%',
        marginLeft: '1%',
        height: 38,
        boxShadow: 'none',
    }
})

export default withStyles(styles)(Page404)