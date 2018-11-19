import React from 'react'
import {object} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Tag from 'client/components/common/Tag'

const WorkHeader = ({work, classes}) => (
    <div>
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

WorkHeader.propTypes = {
    work: object.isRequired,
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
    siteUrl: {
        color: 'white',
        fontSize: '1.5rem',
        marginTop: 7,
        display: 'block',
    },
})

export default withStyles(styles)(WorkHeader)