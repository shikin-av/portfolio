import React from 'react'
import {func, object, string} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import InputCustom from 'client/components/common/InputCustom'
import workInputs from 'client/components/Work/workInputs'
import Tag from 'client/components/common/Tag'

class WorkHeader extends React.Component {
    static propTypes = {
        classes:           object.isRequired,
        handleFieldCHange: func,
        save:              func,
        work:              object,
        mode:              string,
    }
    
    render() {
        const {
            save,
            handleFieldCHange, 
            classes,
            work,
            mode,
        } = this.props

        if(work){
            if(save && mode === 'edit'){
                return (
                    <div className={classes.formContainer}>
                        {
                            workInputs.map(input => (
                                <InputCustom
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    value={work[input.id]}
                                    onChange={handleFieldCHange(input.id)}                            
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
                        </div>                        
                    </div>
                )
            }
        } else return null
    }
}

const styles = theme => ({
    headImg: {
        margin: '0 auto',
        width: '100%',
        display: 'flex',
    },
    titleBlock: {
        textAlign: 'center',
        padding: 50,
        color: 'white',
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
})

export default withStyles(styles)(WorkHeader)