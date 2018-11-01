import React from 'react'
import {string, object, func} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const Tag = ({text, classes, clickHandler, style}) => {
    const cursorStyle = clickHandler ? {cursor: 'pointer'} : null
    const tagStyle = style ? {...style, ...cursorStyle} : cursorStyle

    return (
        <li 
            className={classes.tagWrapper}
            onClick={clickHandler ? () => clickHandler(text) : () => null}
        >
            <span 
                className={classes.tagInner}
                style={tagStyle}
            >
                {text}
            </span>
        </li>
    )
}

Tag.propTypes = {
    text:         string.isRequired,
    classes:      object.isRequired,
    clickHandler: func,
    style:        object,
}

const styles = theme => ({
    tagWrapper: {
        listStyleType: 'none',
        display: 'inline-block',
        padding: '0 1em 0 0',
    },
    tagInner: {
        transition: 'all 0.2s ease',
        borderRadius: '4px',
        display: 'inline-block',
        padding: '5px 15px',
        border: 'solid 1px rgba(255, 255, 255, 0.25)',
        backgroundColor: 'rgba(255, 255, 255, 0.075)',        
    },
})

export default withStyles(styles)(Tag)