import React from 'react'
import {string, func} from 'prop-types'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Animation from 'client/components/common/Animation'
import LoadingSpin from 'client/components/common/LoadingSpin'
import SPB from 'client/components/SimplePageBuilder'
import defaultTheme from 'client/components/themes/default'
import WorkHeader from 'client/components/Work/WorkHeader'
import WorkHeaderAdmin from 'client/components/Work/WorkHeaderAdmin'
import workInputs from 'client/components/Work/workInputs'
import Message from 'client/components/common/Message'
import config from 'config/client'
import showHomeContent from 'client/components/common/showHomeContent'

import {getWork as getWorkApi} from 'client/data/api/site'

class Work extends React.Component {
    static propTypes = {        
        nameUrl:    string.isRequired,
        save:       func,
        changeMode: func,
        mode:       string,
    }

    state = {
        open:    true,
        work:    null,
        message: null,
        theme:   null,
    }    

    componentDidMount = () => {
        const {nameUrl} = this.props
        const {open} = this.state
        this.loadWork(nameUrl)   
        if(open){
            showHomeContent(false)
        }       
    }
    
    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps
        const {open} = this.state
        this.setState({work: null}, () => {
            this.loadWork(nameUrl)
            if(open){
                showHomeContent(false)
            }
        })        
    }

    handleClose = () => {
        this.setState({
            open: false,
            work: null,
        }, () => {
            showHomeContent(true)
            setTimeout(() => {
                if(this.props.save){
                    document.location.href = config.adminPath
                } else {
                    document.location.href = '/#/'
                }
            }, 500)            
        })
    }

    dialogTransition = props => (
        <Slide direction='up' {...props}/>
    )

    handleFieldCHange = type => e => {
        const {work} = this.state
        this.setState({
            work: {
                ...work, 
                [type]: e.target.value
            }
        })
    }

    loadWork = async nameUrl => {
        if(nameUrl === 'create'){
            const work = {}
            work.rows = []
            for(let input of workInputs){
                work[input.id] = input.default || ''
            }
            this.setState({work})            
        } else {
            try {
                const work = await getWorkApi(nameUrl)
                if(!work.error){
                    this.setState({
                        work,
                        theme: createMuiTheme({
                            palette: {
                                primary:   {main: work.color},
                            },
                        })
                    })
                } else {                    
                    this.openMessage({
                        message: 'Не удалось загрузить кейс',
                        type: 'warning',
                    })
                    setTimeout(() => this.handleClose(), 1000)
                }                
            } catch(err) {
                this.openMessage({
                    message: 'Не удалось загрузить кейс',
                    type: 'warning',
                })
            }
        }
    }

    saveRows = rows => {    // get rows from SPB
        const {save, nameUrl} = this.props
        const {work} = this.state

        work.rows = []
        const savingWork = {...work, rows}

        const isCreate = nameUrl === 'create'

        save({
            work:    savingWork,
            nameUrl: isCreate ? 'create' : work.nameUrl
        })
    }

    openMessage = ({message, type}) => {
        const properties = {message, type}
        this.setState({
            message: <Message {...properties}/>
        })
    }

    changeMode = () => null

    render() {
        const {
            classes, 
            nameUrl,
            save,
            changeMode,
            mode,
            deleteHandler,
        } = this.props
        const {
            open, 
            work,
            message,
            theme,
        } = this.state
                
        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                scroll='body'
                id='casedialog'
                TransitionComponent={this.dialogTransition}
                fullScreen={window.innerWidth < 768 ? true : false}
                classes={{
                    paper: classes.dialogPaper
                }}
            >
                <IconButton 
                    onClick={this.handleClose}
                    className={classes.closeBtn}
                >
                    <CloseIcon />
                </IconButton>
                {
                    work ?
                    <Animation animationCssClass='animOpacity' time={1900}>
                        <DialogContent className={classes.content}>  
                            {   
                                save
                                ? <WorkHeaderAdmin
                                    saveHandler={save}
                                    deleteHandler={deleteHandler}
                                    fieldCHangeHandler={this.handleFieldCHange}
                                    work={work}
                                    mode={mode || 'preview'}
                                    nameUrl={nameUrl}
                                /> 
                                : <WorkHeader work={work}/>
                            }
                            <SPB
                                saveHandler={this.saveRows}
                                menu={save ? true : false}
                                mode={mode}
                                rowsData={work.rows || []}
                                theme={{
                                    ...defaultTheme,
                                    ...theme
                                }}
                                changeMode={changeMode || this.changeMode}
                            />
                        </DialogContent>
                    </Animation>
                    : 
                    <DialogContent className={classes.content}>
                        <LoadingSpin/>
                    </DialogContent>
                }      
                {message}          
            </Dialog>
        )        
    }
}

const styles = theme => ({
    content: {        
        color: 'black',   
        padding: 0,
        paddingTop: '0px !important',  
        minHeight: 700,
        overflowY: 'hidden',
    },  
    closeBtn: {
        width: 36,
        height: 36,
        paddingTop: 6,
        display: 'block',
        transition: '0.9s',
        zIndex: 10000,
        position: 'absolute',
        right: 0,
        borderRadius: 4,
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            width: 24,
            height: 24,
            right: -2,
            top: -7,
        },
    },
    dialogPaper: {
        maxWidth: 1024,
        [theme.breakpoints.down('md')]: {
            maxWidth: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            margin: '0px auto',
        }
    },
})

export default withStyles(styles)(Work)