import React from 'react'
import {array} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import _ from 'lodash'

import Animation from 'client/components/common/Animation'
import Tag from 'client/components/common/Tag'
import WorkList from 'client/components/Work/WorkList'

const tagsArr = [
    'react',
    'react-native',
    'express',
    'hapi',
    'nest',
    'firebase',
    'wordpress',
    'django',
]

class WorkFilter extends React.Component {
    static propTypes = {
        works: array.isRequired,
    }

    state ={
        selectedWorks: this.props.works,
        tags: {},        
    }

    componentWillMount = () => {
        this.setState({
            tags: tagsArr.map(tag => {
                return {
                    name:     tag,
                    selected: false
                }
            })
        })
    }

    clickTagHandler = tag => {
        const {tags} = this.state        
        let tpmTags = [...tags]

        tpmTags = tpmTags.map(item => {
            if(item.name === tag){
                item.selected = !item.selected
            }            
            return item
        })

        this.setState({tags: tpmTags})     
    }

    filterByTags = works => {
        const {tags} = this.state
        const selectedTags = []

        for(let tag of tags){
            tag.selected && selectedTags.push(tag.name)
        }
        let selectedWorks
        if(selectedTags.length){
            selectedWorks = _.filter(works, work => {
                const tags = work.tags.split(',')
                const coincidence = _.intersection(selectedTags, tags)
                if(coincidence.length) return work
            })
        } else return works

        return selectedWorks
    }

    render() {
        const {
            classes,
            works,
        } = this.props
        const {tags} = this.state
        return (
            <Animation 
                animationCssClass='animOpacityLong' 
                time={2900}
            >
                <div className={`${classes.filter} work-filter`}>
                    <ul>
                        {
                            tags.map(tag => (
                                <Tag 
                                    text={tag.name} 
                                    key={tag.name}
                                    clickHandler={this.clickTagHandler}
                                    style={
                                        tag.selected
                                        ? {
                                            backgroundColor: '#ffffffad',
                                            color: 'black',
                                        } : null
                                    }
                                />
                            ))
                        }
                    </ul>
                </div>
                <WorkList items={this.filterByTags(works)}/>                
            </Animation>
        )
    }
}

const styles = theme => ({    
    filter: {
        margin: '0 auto',
        marginBottom: 20,
        width: 'max-content',
    },
    works: {},    
})

export default withStyles(styles)(WorkFilter)

