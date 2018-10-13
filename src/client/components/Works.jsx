import React from 'react'
import {array} from 'prop-types'
import {Link} from 'react-router-dom'
import Masonry from 'react-masonry-component'

import withStyles from '@material-ui/core/styles/withStyles'

import config from 'config/client'

const imagesLoadedOptions = {background: '.my-bg-image-el'}

class Works extends React.Component {
    static propTypes = {
        items: array.isRequired,
    }

    masonryOptions = {
        transitionDuration: 0,
        //columnWidth: 120,
        gutter: 24,
        isResizeBound: true,
    }

    clickWorkHandler = e => {
        console.log(e)
    }

    render() {
        const {
            classes,
            items
        } = this.props

        const works = items.map(item => (
            <li 
                className={`${classes.work} work`}
                key={item.img}
            >
               <img src={`${config.assetsPath}/imgs/content/${item.img}`}/> 
               <h3 className={classes.tags}>Lorem ipsum dolor sit amet</h3>
            </li>
        ))

        return (
            <Masonry
                className={classes.masonry}
                elementType={'ul'}
                options={this.masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={imagesLoadedOptions}
                onClick={this.clickWorkHandler}
            >
                {works}
            </Masonry>
        )
    }
}

const styles = theme => ({
    masonry: {
        //margin: '0 0 2em -1.5em',
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
        [theme.breakpoints.down('sm')]: {   //TODO
            width: '100%',
            left: '0px !important',
        }
    },
    tags: {
        fontSize: '1em',
        margin: '1em',
        marginTop: '0.5em',
    }
})

export default withStyles(styles)(Works)