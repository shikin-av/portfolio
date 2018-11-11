import React from 'react'
import {array} from 'prop-types'
import Link from 'react-router-dom/Link'
import Masonry from 'react-masonry-component'
import _ from 'lodash'
import withStyles from '@material-ui/core/styles/withStyles'

const imagesLoadedOptions = {background: '.my-bg-image-el'}

class WorkList extends React.Component {
    static propTypes = {
        items: array.isRequired,
    }    

    componentWillMount = () => {
        this.defaultMiniatureHeight = null
        /*switch(true){
            case(window.innerWidth < 768):
                this.defaultMiniatureHeight = 268
                break
            case(window.innerWidth === 768):
                this.defaultMiniatureHeight = 268
        }*/
    }

    masonryOptions = {
        transitionDuration: 0,
        gutter: 24,
        isResizeBound: true,
    }

    render() {
        const {
            classes,
            items
        } = this.props
    
        const works = _.sortBy(items, 'sortWeight').map(item => (
            <li 
                className={`${classes.work} work gridcase`}
                key={item.nameUrl}
            >
                <Link 
                    to={item.nameUrl}
                >
                    <figure className={`effect-bubba`}>
                        <div className='work-img-wrapper' style={{
                            height: window.innerWidth < 768 ? 268 :item.miniatureHeight,
                        }}>
                            <div className='work-img-inner'></div>
                            <img 
                                src={item.miniature}
                                className={classes.img}    
                            />
                        </div>
                        <figcaption>                            
                            <p>{item.description}</p>
                        </figcaption>			                        
                        <h3 className={classes.tags}>
                            {
                                item.tags &&
                                item.tags.split(',').map(tag => 
                                    <span 
                                        className={classes.tag}
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                )
                            }
                        </h3>
                    </figure>                    
                </Link>
            </li>
        ))

        return (        
            <Masonry                
                elementType={'ul'}
                className={classes.mansonry}
                options={this.masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={imagesLoadedOptions}
            >
                {works}
            </Masonry>                            
        )
    }
}

const styles = theme => ({
    mansonry: {
        left: -10,
        marginBottom: -10,    
        [theme.breakpoints.down('xs')]: {
            left: '-13%',
        },
    },
    work: {
        display: 'block',        
        outline: 0,
        listStyleType: 'none',
        margin: '0 0 1.5em 0',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderBottom: 'none',
        textAlign: 'center',
        borderRadius: 4,
        boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.25)',
        backgroundColor: 'rgba(255, 255, 255, 0.075)',
        overflow: 'hidden', 
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '44%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
        },

    },
    img: {
        position: 'absolute',
        margin: 'auto',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0

    },
    tags: {
        fontSize: '1em',
        margin: '1em',
        marginTop: '0.5em',
        marginBottom: '0.8em',
        color: 'rgba(255, 255, 255, 0.65)',
        textDecoration: 'none',
    },
    tag: {
        padding: 5,
    },
})

export default withStyles(styles)(WorkList)