import React from 'react'
import Grid from '@material-ui/core/Grid'
import icon from '../../svg/column-3-1.svg'
import rowRender, {sectionHoc as section} from './rowRender'

const sections = [
    section(props => <Grid item xs={12} sm={9} {...props}/>),
    section(props => <Grid item xs={12} sm={3} {...props}/>),
]

export default rowRender({
	name: 'column3_1',
	sections,
	icon,
})