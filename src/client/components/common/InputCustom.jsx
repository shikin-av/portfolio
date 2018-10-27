import React from 'react'
import {
    string, 
    number,
    func, 
    oneOfType, 
    bool, 
    object
} from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const InputCustom = props => {
    const {
        classes,
        id,
        label,
        value,
        onChange,
        required,
        customClasses,
        type,
        multiline,
        size,
    } = props

    return (
        <FormControl className={`${classes.formControl} ${size ? classes[size] : null}`}>
            <InputLabel
                htmlFor={id}
                FormLabelClasses={{
                    root:    classes.cssLabel,
                    focused: classes.cssFocused,
                }}
            >
                {`${label}${required ? '*' : ''}`}
            </InputLabel>
            <InputBase
                id={id}
                value={value}
                onChange={onChange}        
                required={required || false}
                classes={customClasses || {
                    root:  classes.root,
                    input: classes.input,
                }}
                type={type || null}
                multiline={multiline || false}
                style={
                    multiline ? {
                        padding: 0,
                    } : null
                }
            /> 
        </FormControl>
    )
}

InputCustom.propTypes = {
    id:              string.isRequired,
    label:           string.isRequired,
    value:           oneOfType([string, number]).isRequired,
    onChange:        func.isRequired,
    required:        bool,
    customClasses:   object,
    type:            string,
    multiline:       bool,
    size:            string,
}

const styles = theme => ({
    formControl: {        
        marginLeft: '1%',
        marginRight: '1%',
        marginTop: 7,
        marginBottom: 7,        
        [theme.breakpoints.down('xs')]: {
            width: '98%',
        },
    },
    '1/4': {
        width: '23%',
    },
    '1/3': {
        width: '31%',
    },
    '1/2': {
        width: '48%',
    },
    'full': {
        width: '98%',
    },
    'standart': {
        width: 200,
    },
    root: {        
        'label + &': {
            marginTop: 18,
        }, 
    },        
    input: {
        background: '#e0dfde75',
        padding: '0.7em 1em',
        borderRadius: 4,
        '&:before': {
            borderBottom: 'none',
        },
        '&:focus': {
            background: '#e0dfde',
        }
    },
    cssLabel: {
        padding: 6,
        '&$cssFocused': {
            color: 'black',
        },
    },
    cssFocused: {},
})

export default withStyles(styles)(InputCustom)