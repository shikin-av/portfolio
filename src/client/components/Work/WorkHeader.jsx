import React from 'react'
import {func, object, string} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import InputCustom from 'client/components/common/InputCustom'
import workInputs from 'client/components/Work/workInputs'
import Tag from 'client/components/common/Tag'
import Button from '@material-ui/core/Button'

const WorkHeader = ({
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
                <div style={{
                    backgroundColor: work.color ? work.color : null
                }}>
                    {   
                        work.headImg &&
                        <img 
                            src={work.headImg} 
                            className={classes.headImg}
                        />                            
                    }   
                    <div 
                        className={classes.titleBlock}
                        style={{
                            backgroundColor: work.color ? work.color : null
                        }}
                    >
                        <h1 className={classes.title}>{work.title}</h1>
                        <h3 className={classes.description}>{work.description}</h3>
                        {
                            work.tags &&
                            work.tags.split(',').map(tag => (
                                <Tag text={tag} key={tag}/>
                            ))
                        }
                        <br/>
                        {
                            work.siteUrl &&
                            <a 
                                href={work.siteUrl}
                                target='_blank'
                                className={classes.siteUrl}
                            >
                                {work.siteUrl}
                            </a>
                        }
                    </div>                        
                </div>
            )
        }
    } else return null
}


WorkHeader.propTypes = {
    classes:            object.isRequired,
    fieldCHangeHandler: func,
    saveHandler:        func,
    deleteHandler:      func,
    work:               object,
    mode:               string,
    nameUrl:            string,
}

const styles = theme => ({
    headImg: {
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    titleBlock: {
        textAlign: 'center',
        padding: 50,
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 10px 40px 10px',
        },
    },
    title: {
        marginBottom: 2,
    },
    description: {
        marginBottom: 14,
    },
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
    siteUrl: {
        color: 'white',
        fontSize: '1.5rem',
        marginTop: 7,
        display: 'block',
    }
})

export default withStyles(styles)(WorkHeader)