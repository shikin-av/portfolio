import React from 'react'
import {object, func, bool, string} from 'prop-types'
import ReactDOM from 'react-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import ViewIcon from '@material-ui/icons/Pageview'
import SaveIcon from '@material-ui/icons/Save'

class Menu extends React.Component {
    static propTypes = {
        classes:    object.isRequired,
        menu:       bool,
        theme:      object.isRequired,
        mode:       string.isRequired,
        save:       func.isRequired,
        changeMode: func.isRequired,
    }

    render(){
        const {
            classes, 
            menu,
            theme,
            mode,
            save,
            changeMode,
        } = this.props
        if(menu){
            return (
                <div className={classes.menu}>
                    <Tooltip title='Сохранить страницу'>
                        <Button                                
                            onClick={save}
                            className={classes.menuButton}
                            ref={'saveBtn'}
                            style={{color: theme.palette.contrast}}
                            onMouseEnter={() => {
                                const el = ReactDOM.findDOMNode(this.refs.saveBtn)
                                el.style.color = theme.palette.primary.main
                            }}
                            onMouseLeave={() => {
                                const el = ReactDOM.findDOMNode(this.refs.saveBtn)
                                el.style.color = theme.palette.contrast
                            }}
                        >
                            <SaveIcon/>Сохранить
                        </Button>   
                    </Tooltip>
                    {
                        mode === 'edit' &&
                        <Tooltip title='Предпросмотр страницы'>
                            <Button
                                className={classes.menuButton}
                                onClick={() => changeMode('preview')}
                                ref={'previewBtn'}
                                style={{color: theme.palette.contrast}}
                                onMouseEnter={() => {
                                    const el = ReactDOM.findDOMNode(this.refs.previewBtn)
                                    el.style.color = theme.palette.primary.main
                                }}
                                onMouseLeave={() => {
                                    const el = ReactDOM.findDOMNode(this.refs.previewBtn)
                                    el.style.color = theme.palette.contrast
                                }}
                            >
                                <ViewIcon/>Предпросмотр
                            </Button>
                        </Tooltip>
                    }
                    {
                        mode === 'preview' &&
                        <Tooltip title='Редактирование страницы'>
                            <Button
                                className={classes.menuButton}
                                onClick={() => changeMode('edit')}
                                ref={'editBtn'}
                                style={{color: theme.palette.contrast}}
                                onMouseEnter={() => {
                                    const el = ReactDOM.findDOMNode(this.refs.editBtn)
                                    el.style.color = theme.palette.primary.main
                                }}
                                onMouseLeave={() => {
                                    const el = ReactDOM.findDOMNode(this.refs.editBtn)
                                    el.style.color = theme.palette.contrast
                                }}
                            >
                                <ViewIcon/>Редактор
                            </Button>
                        </Tooltip>
                    }                        
                </div>
            )
        } else return null 
    }
}

const styles = () => ({
    menu: {
        textAlign: 'center',
        marginBottom: 30,
        paddingTop: 10,

        position: 'absolute',
        top: 0,
        width: '100%',
    },
    menuButton: {
       backgroundColor: '#e0e0e0',
       marginRight: 7,
    },
})

export default withStyles(styles)(Menu)