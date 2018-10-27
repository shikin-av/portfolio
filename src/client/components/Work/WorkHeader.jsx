import React from 'react'
import {func, object} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import config from 'config/client'
import InputCustom from 'client/components/common/InputCustom'
import workInputs from 'client/components/Work/workInputs'

const WorkHeader = props => {
    const {
        save,
        handleFieldCHange, 
        classes,
        work,
    } = props

    if(work){
        if(save){
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
                <div>
                    {   
                        work.headImg &&
                        <img 
                            src={`${config.assetsPath}/imgs/content/${work.headImg}`} 
                            className={classes.headImg}
                        />                            
                    }
                    {/*TODO tags*/}
                </div>
            )
        }
    } else return null
}

WorkHeader.propTypes = {
    classes:           object.isRequired,
    handleFieldCHange: func,
    save:              func,
    work:              object,
}

const styles = theme => ({
    headImg: {
        margin: '0 auto',
        width: '100%',
        display: 'flex',
    },
    tag: {

    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 70,
        marginBottom: 50,
    },    
})

export default withStyles(styles)(WorkHeader)