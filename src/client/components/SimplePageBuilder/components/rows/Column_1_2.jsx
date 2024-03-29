import React from 'react'
import Grid from '@material-ui/core/Grid'
import icon from '../../svg/column-1-2.svg'
import rowRender, {sectionHoc as section} from './rowRender'

const sections = [
    section(props => <Grid item xs={12} sm={4} {...props}/>),
    section(props => <Grid item xs={12} sm={8} {...props}/>),
]

export default rowRender({
	name: 'column1_2',
	sections,
	icon,
})