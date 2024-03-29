import React from 'react'
import {EditorState, convertToRaw, ContentState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import {object, func, number} from 'prop-types'
import device from 'current-device'

import {withStyles} from '@material-ui/core/styles'
import TextIcon from '@material-ui/icons/TextFields'
import grey from '@material-ui/core/colors/grey'

class TextEditor extends React.Component {
	static propTypes = {
		classes:       object.isRequired,
		row:           object,
		rowPlace:	   number.isRequired,
		element:       object.isRequired,
		changeContent: func.isRequired,
		theme:		   object.isRequired,
	}

	state = {
		editorState: EditorState.createEmpty(),
		showToolbar: false,
		focus:       false,
	}

	isMobile = device.mobile()

	options = {
		options: [
			'inline',
			'blockType',
			'fontSize',
			'list',
			'textAlign',
			'colorPicker',
			'link',
			'image',
			'history'
		],
		inline: {
			inDropdown: this.isMobile ? true : false,
			options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace',]
		},
		blockType: {inDropdown: true},
		list: {inDropdown: true},
		textAlign: {inDropdown: true},
		link: {inDropdown: true},
	}

	componentWillMount = () => {
		const {element} = this.props
		if(element.content){
			const blocksFromHtml = htmlToDraft(element.content)
			const {contentBlocks, entityMap} = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)
			this.setState({editorState: EditorState.createWithContent(contentState)})
		}
	}

	onEditorStateChange = editorState => {
		const {
			row,
			element,
			changeContent,
			rowPlace,
		} = this.props

	    this.setState({editorState}, () => {
			const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
			changeContent({row, rowPlace, element, content})
		})
	}

	render() {
		const {
			editorState,
			showToolbar,
			focus,
		} = this.state
		const {
			classes,
			theme,
		} = this.props

	    return (
			<div className={classes.root}>				
				<Editor
					editorState={editorState}
					onEditorStateChange={this.onEditorStateChange}
					onFocus={() => this.setState({
						showToolbar: true,
						focus:       true,
					})}
					onBlur={() => this.setState({
						showToolbar: false,
						focus:       false,
					})}
					toolbar={this.options}
					wrapperClassName={classes.wrapper}
					toolbarClassName={this.isMobile ? classes.toolbarFixed : classes.toolbar}
					toolbarStyle={
						showToolbar
						? {
							display: 'flex',
							outline: `1px solid ${theme.palette.constrast}`
						} 
						: {
							display: 'none',
							outline: `1px solid ${theme.palette.constrast}`
						}
					}
					wrapperStyle={
						focus ?
						{
							outline: `1px dashed ${theme.palette.constrast}`,
							borderRadius: 4,
							backgroundColor: 'rgba(0,0,0,0.1)',
						}
						: {}
					}
					placeholder={focus ? '' : 'Текстовый блок'}
				/>						
			</div>
	    )
  	}
}

const styles = () => ({
	root: {
		height: '100%',
	},
	wrapper: {
		height: '100%',
		padding: '0px 15px',
	},
	toolbar: {
		position: 'absolute',
		marginTop: -56,
		left: 0,
		width: '100%',
		zIndex: 100,
		border: 0,
		outlineOffset: -1,
		boxShadow: '0px 6px 11px -3px rgba(0, 0, 0, 0.16)',
		paddingTop: 10,
		paddingBottom: 5,
		'.rdw-option-wrapper': {
			borderColor: 'red',
		},
		color: grey[900],
	},
	toolbarFixed: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 100,
		boxShadow: '0px 6px 11px -3px rgba(0, 0, 0, 0.16)',
		color: grey[900],
	},
})

export const TextEditorWithStyles = withStyles(styles)(TextEditor)

export const Icon = props => (
	<TextIcon/>
)
