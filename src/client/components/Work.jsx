import React from 'react'
import {string, func} from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'

import config from 'config/client'
import {rowsFake, worksFake} from 'client/fakeData'
import Animation from 'client/components/Animation'
import Loading from 'client/components/Loading'
import SPB from 'client/components/SimplePageBuilder'
import defaultTheme from 'client/components/themes/default'


class Work extends React.Component {
    static propTypes = {        
        nameUrl: string.isRequired,
        save:    func,
    }

    state = {
        open: true,
        work: null,
    }

    loadWork = nameUrl => {
        //TODO
    }
    

    componentDidMount = () => {
        setTimeout(() => {  //TODO delete
            this.setState({
                work: {},
            })
        }, 500)    
        const {nameUrl} = this.props
        this.loadWork(nameUrl)
        
    }
    
    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps
        this.setState({
            open: true,
            //work: {},
        })  //TODO
    }

    handleClose = () => {
        this.setState({
            open: false,
            work: null,
        }, () => {
            showRootContent(true)
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

    header = () => {
        const {save} = this.props
        if(save){
            return (
                <h1>HEADER SETTINGS</h1>
            )
        } else {
            return (
                <h1>HEADER</h1>
            )
        }
    }

    saveRows = rows => {
        const {save} = this.props

        //TODO make work info
        const workInfo = worksFake[0]
        
        const work = Object.assign(workInfo, {rows})
        save(work)
    }

    render() {
        const {
            classes, 
            nameUrl,
            save,
        } = this.props
        const {open, work} = this.state
        
        if(open){
            showRootContent(false)
        }
        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                scroll='body'
                id='casedialog'
                TransitionComponent={this.dialogTransition}
            >
            {
                work ?
                <Animation animationCssClass='animOpacity' time={1900}>
                    <DialogContent className={classes.content}>  
                        {this.header()}                                              
                        <SPB
                            saveHandler={this.saveRows}
                            menu={save ? true : false}
                            mode={save ? 'edit' : 'preview'}
                            rowsData={rowsFake}     //TODO from api
                            theme={defaultTheme}
                        />
                    </DialogContent>
                </Animation>
                : 
                <DialogContent className={classes.content}>
                    <Loading/>
                </DialogContent>
            }                
            </Dialog>
        )        
    }
}

const showRootContent = isShow => {
    const root = document.getElementById('root')
    if(isShow){
        document.getElementById('root').style.opacity = 1
    } else {
        document.getElementById('root').style.opacity = 0
    }
}

const styles = () => ({
    content: {        
        color: 'black',   
        padding: 0,
        paddingTop: '0px !important',  
        minHeight: 700,
        overflowY: 'hidden',
    },
    headImg: {
        margin: '0 auto',
        width: '100%',
        display: 'flex',
    }
})

export default withStyles(styles)(Work)