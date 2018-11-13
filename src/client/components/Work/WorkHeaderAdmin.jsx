import React from 'react'
import {func, object, string} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import InputCustom from 'client/components/common/InputCustom'
import workInputs from 'client/components/Work/workInputs'
import Tag from 'client/components/common/Tag'
import WorkHeader from 'client/components/Work/WorkHeader'
import Button from '@material-ui/core/Button'

const WorkHeaderAdmin = ({
    saveHandler,
    deleteHandler,
    fieldCHangeHandler, 
    classes,
    work,
    mode,
    nameUrl,
}) => {
           
    if(work){
        if(saveHandler && mode === 'edit'){
            return (
                <div className={classes.formContainer}>
                    {
                        nameUrl !== 'create' && deleteHandler &&
                        <Button
                            variant='outlined'
                            className={classes.deleteBtn}
                            onClick={() => deleteHandler(nameUrl)}
                        >
                            Удалить
                        </Button>
                    }                        
                    {
                        workInputs.map(input => (
                            <InputCustom
                                key={input.id}
                                id={input.id}
                                label={input.label}
                                value={work[input.id]}
                                onChange={fieldCHangeHandler(input.id)}                            
                                required={input.required || false}
                                multiline={input.multiline || false}
                                size={input.size || null}
                                type={input.type || null}
                            />
                        ))
                    }                        
                </div>
            )
        } else {
            return (
                <WorkHeader work={work}/>
            )
        }
    } else return null
}


WorkHeaderAdmin.propTypes = {
    classes:            object.isRequired,
    fieldCHangeHandler: func,
    saveHandler:        func,
    deleteHandler:      func,
    work:               object,
    mode:               string,
    nameUrl:            string,
}

const styles = theme => ({    
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 70,
        marginBottom: 50,
    },    
    deleteBtn: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10000,
    },    
})

export default withStyles(styles)(WorkHeaderAdmin)