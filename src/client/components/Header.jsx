import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import config from 'config/client'

const Header = props => {
    const {classes} = props
    return (
        <div className={classes.header}>
            <div className={classes.avatar}>
                <img 
                    className={classes.avatarImg}
                    src={`${config.assetsPath}/imgs/design/avatar.jpg`}
                />
            </div>
            <div>
                <h1 className={classes.surname}>Шикин</h1>
                <h2 className={classes.name}>Александр</h2>
                <h3 className={classes.phone}>8 912 448 33 40</h3>
                <h3 className={classes.info}>MERN Stack Developer</h3>
            </div>
        </div> 
    )
}

const styles = () => ({    
    header: {
        padding: '4em 0 2em 0',
        textAlign: 'center',
        marginBottom: -20,
    },
    avatar: {
        borderRadius: '100%',
        display: 'inline-block',
        margin: 0,
        padding: '0.5em',
        border: 'solid 1px rgba(255, 255, 255, 0.25)',
        backgroundColor: 'rgba(255, 255, 255, 0.075)',
    },    
    avatarImg: {
        borderRadius: '100%',
        display: 'block',
        width: '10em',
    },
    surname: {
        marginBottom: -6,
        fontSize: '3rem',
    },
    name: {
        marginBottom: 0,
        fontSize: '2rem',
    },    
    phone: {
        fontSize: '1.5rem',
        marginBottom: 0,
    },
    info: {},
})

export default withStyles(styles)(Header)