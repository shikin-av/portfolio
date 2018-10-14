import React from 'react'
import {array} from 'prop-types'
import {Link} from 'react-router-dom'
import Masonry from 'react-masonry-component'

import withStyles from '@material-ui/core/styles/withStyles'

import config from 'config/client'

const imagesLoadedOptions = {background: '.my-bg-image-el'}

class WorkList extends React.Component {
    static propTypes = {
        items: array.isRequired,
    }

    masonryOptions = {
        transitionDuration: 0,
        //columnWidth: 6,
        gutter: 24,
        isResizeBound: true,
    }

    clickWorkHandler = e => {
        //console.log(e)
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
                <Link to={item.nameurl}>
                    <img 
                        src={`${config.assetsPath}/imgs/content/${item.img}`}
                        className={classes.img}
                    /> 
                    <h3 className={classes.tags}>Lorem ipsum dolor sit amet</h3>
                </Link>
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
        color: 'rgba(255, 255, 255, 0.65)',
        textDecoration: 'none',
    },
    img: {
        background: `
            linear-gradient(to bottom, 
            rgba(255,255,255,0.71) 0%,
            rgba(255,255,255,0.71) 0%,
            rgba(241,241,241,0.86) 50%,
            rgba(225,225,225,0.86) 51%,
            rgba(225,225,225,1) 100%)
        `,
    },
})

export default withStyles(styles)(WorkList)