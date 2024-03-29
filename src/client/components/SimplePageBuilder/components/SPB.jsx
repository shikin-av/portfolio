import React from 'react'
import _ from 'lodash'
import {object, func, bool, string, array} from 'prop-types'
import ReactDOM from 'react-dom'

import {
    withStyles,
    MuiThemeProvider
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Row from './Row'
import rowTypes from './rows'
import AppendRow from './AppendRow'
import DividerGorizontal from './DividerGorizontal'
import Menu from './Menu'
import Animation from '../../common/Animation'

class App extends React.Component {
    static propTypes = {
        saveHandler: func.isRequired,
        changeMode:  func.isRequired,
        classes:     object.isRequired,
        menu:        bool.isRequired,
        mode:        string,
        rowsData:    array,
        theme:       object.isRequired,
    }

    state = {
        mode:        this.props.mode || 'preview',
        isShowTools: false,
        rows:        this.props.rowsData || [],
    }

    tmpRows = this.state.rows   
    
    componentWillMount = () => {
        const {theme, mode} = this.props        
        document.body.style.backgroundColor = theme.palette.background
    }

    componentDidMount = () => {
        const {theme} = this.props
        this.setImagesStyle(theme)   
    }
    
    componentWillReceiveProps = nextProps => {
        const newTheme = nextProps.theme
        document.body.style.backgroundColor = newTheme.palette.background
        this.setImagesStyle(newTheme)        
    }

    setImagesStyle = theme => {
        const spb = ReactDOM.findDOMNode(this.refs.spb) 
        setTimeout(() => {
            const fullwidthImages = spb.querySelectorAll('.fullwidth img')
            const column2Images   = spb.querySelectorAll('.column2 img')
            const spbImages = [...fullwidthImages, ...column2Images]

            if(spbImages.length && theme.palette.primary.main){
                for(let image of spbImages){
                    image.style.border = `1px solid ${theme.palette.primary.main}`
                }
            }
        }, 100)
        
    }

    showToolsHandler = val => {
        this.setState({isShowTools: val})
    }

    addRow = ({type, id}) => {
        const {rows} = this.state
        const prevRowId = id
        
        const prevRowIndex = _.findIndex(rows, row => {
            return row.id === prevRowId
        })
        
        const prevRows = _.take(rows, prevRowIndex + 1)                
        const nextRows = _.difference(rows, prevRows)
        prevRows.push({
            id: Math.random(),
            type: type,
            elements: []
        })
        const resultRows = _.concat(prevRows, nextRows) 
        this.tmpRows = resultRows
        this.setState({
            isShowTools: false,
            rows: resultRows,
        })
        
    }

    deleteRow = id => {
        const {rows} = this.state
        const newRows = _.reject(rows, {id: id})
        this.tmpRows = newRows
        this.setState({rows: newRows})
    }

    addElement = ({element, row, rowPlace}) => {
        const {rows} = this.state    
        const currentRowIndex = _.findIndex(rows, item => {
            return item.id === row.id
        })        
        
        const rowElement = {}
        rowElement.id = Math.random()
        rowElement.type = element.type

        rows[currentRowIndex].elements[rowPlace] = rowElement
        
        this.tmpRows = rows
        this.setState({rows})
    }

    deleteElement = ({element, row, rowPlace}) => {
        const {rows} = this.state
        const currentRowIndex = _.findIndex(rows, item => {
            return item.id === row.id
        })        
        rows[currentRowIndex].elements[rowPlace] = null
        this.tmpRows = rows
        this.setState({rows})
    }

    selectRowColor = ({id, color}) => {
        const {rows} = this.state
        const rowIndex = _.findIndex(rows, row => {
            return row.id === id
        })
        if(rowIndex !== -1){
            rows[rowIndex].color = color
            this.tmpRows = rows
            this.setState({rows})
        } 
    }

    moveRowHandler = ({id, direction}) => {
        const {rows} = this.state
        const currentRowIndex = _.findIndex(rows, item => {
            return item.id === id
        })
        let neighborRowIndex = null
        if(direction === 'up'){
            neighborRowIndex = currentRowIndex - 1
        } else if(direction === 'down'){
            neighborRowIndex = currentRowIndex + 1
        }
        const currentRow =  rows[currentRowIndex]
        const neighborRow = rows[neighborRowIndex]
        rows[currentRowIndex] = neighborRow
        rows[neighborRowIndex] = currentRow
        this.tmpRows = rows
        this.setState({rows})
    }

    changeElementContent = ({row, rowPlace, element, content}) => {        
        const {rows} = this.state
        let rowIndex = 0
        if(rows.length){
            rowIndex = _.findIndex(rows, item => {
                return item.id === row.id
            })            
        }        
        this.tmpRows[rowIndex].elements[rowPlace].content = content        
    }

    changeMode = mode => {
        this.setState({
            mode,
            rows: this.tmpRows
        }, () => this.props.changeMode(mode))
    }    

    appendRowFake = () => (
        <div style={{
            height: 36,
            margin: -20,
            width: '100%',
        }}></div>
    )

    save = () => {
        const {saveHandler} = this.props
        saveHandler(this.tmpRows)
    }
    
    render() {
        const {
            classes, 
            theme,
            menu
        } = this.props
        const {
            mode, 
            rows, 
            isShowTools
        } = this.state
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>                                  
                <div 
                    className={classes.root}
                    style={{
                        color: `${theme.palette.contrast}`,
                    }}
                    ref='spb'
                    id='spb'
                >                    
                    <Menu
                        menu={menu}
                        theme={theme}
                        mode={mode}
                        save={this.save}
                        changeMode={this.changeMode}
                    />                   
                    {
                        mode === 'edit' &&
                        <AppendRow 
                            showToolsHandler={this.showToolsHandler}
                            isShowTools={isShowTools}
                            addRowHandler={this.addRow}
                            id={Math.random()}
                            theme={theme}
                        />
                    }
                    {mode === 'preview' && this.appendRowFake()}

                    <DividerGorizontal mode={mode}/>                    
  
                    <Animation animationCssClass='animTranslateY'>                   
                        {                            
                            rows.map((row, i) => {
                                let RowView = rowTypes[_.findIndex(rowTypes, rowType => {return rowType.type === row.type})]
                                switch(mode) {
                                    case 'edit':
                                        RowView = RowView.edit
                                        break
                                    case 'preview':
                                        RowView = RowView.preview
                                        break
                                }
                                let position = 'middle'
                                if(i === 0){
                                    position = 'first'
                                } else if(i === rows.length - 1){
                                    position = 'last'
                                }
                                
                                return (
                                    <div key={row.id}>
                                        <Row 
                                            mode={mode}                                            
                                            id={row.id}
                                            color={row.color || null}
                                            showToolsHandler={this.showToolsHandler}                                            
                                            addHandler={this.addRow}
                                            deleteHandler={this.deleteRow}
                                            selectColorHandler={this.selectRowColor}
                                            moveHandler={this.moveRowHandler}
                                            position={position}
                                            rowsCount={rows.length}
                                            theme={theme}
                                        >
                                            <RowView 
                                                elements={row.elements} 
                                                row={row}
                                                deleteElementHandler={this.deleteElement}
                                                addElementHandler={this.addElement}
                                                changeContentHandler={this.changeElementContent}
                                                theme={theme}
                                            />
                                        </Row>                                        
                                        {
                                            mode === 'edit' &&
                                            <AppendRow 
                                                showToolsHandler={this.showToolsHandler}
                                                isShowTools={isShowTools}
                                                addRowHandler={this.addRow}
                                                id={row.id}
                                                theme={theme}
                                            />
                                        }
                                        {mode === 'preview' && this.appendRowFake()}
                                    </div>
                                )
                            })
                        }
                    </Animation>
                </div>
            </MuiThemeProvider>
        )        
    }
}

const styles = () => ({
    root: {        
        top: 0,
        left: 0,
        width: '100%',     
        //fontSize: '14pt',   
        fontSize: '1.3rem',
        lineHeight: '1.4em',
    },
})

export default withStyles(styles)(App)