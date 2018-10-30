import React from 'react'
import {string, func} from 'prop-types'
import ReactDOM from 'react-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import {rowsFake, worksFake} from 'client/fakeData'
import Animation from 'client/components/common/Animation'
import LoadingSpin from 'client/components/common/LoadingSpin'
import SPB from 'client/components/SimplePageBuilder'
import defaultTheme from 'client/components/themes/default'
import WorkHeader from 'client/components/Work/WorkHeader'
import workInputs from 'client/components/Work/workInputs'

class Work extends React.Component {
    static propTypes = {        
        nameUrl:    string.isRequired,
        save:       func,
        changeMode: func,
        mode:       string,
    }

    state = {
        open: true,
        work: null,
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
        this.loadWork(nameUrl)
        if(open){
            showHomeContent(false)
        }
    }

    handleClose = () => {
        this.setState({
            open: false,
            work: null,
        }, () => {
            showHomeContent(true)
            setTimeout(() => {
                if(this.props.save){
                    document.location.href = '/admin#/'
                } else {
                    document.location.href = '/#/'
                }
            }, 500)            
        })
    }

    dialogTransition = props => {
        let maxWidth = '100%'
        let margin   = '0 auto'
        switch(true){
            case (window.innerWidth == 768):
                maxWidth = '90%'
                margin   = '48px auto'
                break            
            case (window.innerWidth > 768):
                maxWidth = 1024
                margin   = '48px auto'
                break
        }
        return (
            <Slide 
                direction='up' 
                {...props} 
                style={{
                    width:     '100%',
                    maxWidth:  maxWidth,
                    margin:    margin,
                    minHeight: window.innerHeight,
                    backgroundColor: '#ffffff',
                }}
            />
        )
    }

    handleFieldCHange = type => e => {
        const {work} = this.state
        this.setState({
            work: Object.assign(
                work, {[type]: e.target.value}
            )
        })
    }

    loadWork = nameUrl => {
        if(nameUrl === 'create'){
            const work = {}
            work.rows = []
            for(let input of workInputs){
                work[input.id] = input.default || ''
            }
            this.setState({work})            
        } else {
            const workInfo = worksFake[0]   //TODO get from API
            this.setState({
                work: Object.assign(workInfo, {rows: rowsFake}),
            })
        }
    }

    saveRows = rows => {    // get rows from SPB
        const {save, nameUrl} = this.props
        const {work} = this.state

        work.rows = []  //!!!
        const savingWork = Object.assign(work, {rows})

        const isCreate = nameUrl === 'create'

        save({
            work:    savingWork,
            nameUrl: isCreate ? 'create' : work.nameUrl
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
        } = this.props
        const {
            open, 
            work,
        } = this.state
                
        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                scroll='body'
                id='casedialog'
                TransitionComponent={this.dialogTransition}
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
                            <WorkHeader
                                save={save}
                                handleFieldCHange={this.handleFieldCHange}
                                work={work}
                                mode={mode || 'preview'}
                            />                                             
                            <SPB
                                saveHandler={this.saveRows}
                                menu={save ? true : false}
                                mode={save ? 'edit' : 'preview'}
                                rowsData={work.rows || []}
                                theme={defaultTheme}
                                changeMode={changeMode || this.changeMode}
                            />
                        </DialogContent>
                    </Animation>
                    : 
                    <DialogContent className={classes.content}>
                        <LoadingSpin/>
                    </DialogContent>
                }                
            </Dialog>
        )        
    }
}

export const showHomeContent = isShow => {
    const homeContent = document.getElementById('homeContent')
    if(isShow){
        homeContent.style.opacity = 1
    } else {
        homeContent.style.opacity = 0
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
    },
})

export default withStyles(styles)(Work)