import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const Row = props => {
    const {
        classes, 
        children,
        style,
    } = props
    return(
        <div 
            className={classes.root}
            style={style}
        >
            <hr className={classes.hr}/>
            <div className={classes.content}>
                {children}
            </div>
            <hr className={classes.hr}/>
        </div>
    )
}

const styles = () => ({
    root: {        
        padding: '10px 0',
        borderBottom: '1px solid rgba(0,0,0,0.2)',
        zIndex: 1,
        background: 'url(/assets/imgs/design/background.png) repeat',
        backgroundColor: 'rgb(230, 225, 208)',
    },
    hr: {
        margin: 0,
        borderTop: '1px dashed rgba(0,0,0,0.25)',
        borderBottom: '1px dashed rgba(255,255,255,0.25)',
        bottom: 10,
        backgroundColor: 'transparent',
        zIndex: 10,
        width: '100%',
        height: 0,
    },
    content: {
        padding: 35,
    },
})

export default withStyles(styles)(Row)