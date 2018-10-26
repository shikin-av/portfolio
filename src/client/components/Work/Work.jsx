import React from 'react'
import {string, func} from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'
import TextField from '@material-ui/core/TextField'

import config from 'config/client'
import {rowsFake, worksFake} from 'client/fakeData'
import Animation from 'client/components/common/Animation'
import LoadingSpin from 'client/components/common/LoadingSpin'
import SPB from 'client/components/SimplePageBuilder'
import defaultTheme from 'client/components/themes/default'
import InputCustom from 'client/components/common/InputCustom'
import workInputs from 'client/components/Work/workInputs'



class Work extends React.Component {
    static propTypes = {        
        nameUrl: string.isRequired,
        save:    func,
    }

    state = {
        open: true,
        work: null,
    }    

    componentDidMount = () => {
        const {nameUrl} = this.props
        this.loadWork(nameUrl)          
    }
    
    componentWillReceiveProps = nextProps => {
        const {nameUrl} = nextProps
        this.loadWork(nameUrl)
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

    handleFieldCHange = type => e => {
        const {work} = this.state
        this.setState({
            work: Object.assign(
                work, {[type]: e.target.value}
            )
        })
    }

    header = () => {
        const {save, classes} = this.props
        const {work} = this.state
        if(work){
            if(save){
                return (
                    <div className={classes.formContainer}>
                        {
                            workInputs.map(input => (
                                <InputCustom
                                    key={input.id}
                                    id={input.id}
                                    label={input.label}
                                    value={work[input.id]}
                                    onChange={this.handleFieldCHange(input.id)}                            
                                    required={input.required || false}
                                    multiline={input.multiline || false}
                                    size={input.size || null}
                                    type={input.type || null}
                                />
                            ))
                        }                        
                    </div>
                )
            } else {
                return (
                    <div>
                        {   
                            work.headImg &&
                            <img 
                                src={`${config.assetsPath}/imgs/content/${work.headImg}`} 
                                className={classes.headImg}
                            />                            
                        }
                        {/*TODO tags*/}
                    </div>
                )
            }
        } else return null        
    }

    loadWork = nameUrl => {
        //TODO fetch from api        
        const workInfo = worksFake[0]
        setTimeout(() => {
            this.setState({
                work: Object.assign(workInfo, {rows: rowsFake}),
            })
        }, 500)
    }

    saveRows = rows => {    // get rows from SPB
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
        const {
            open, 
            work,
        } = this.state
        
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
                            rowsData={work.rows || []}
                            theme={defaultTheme}
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

const showRootContent = isShow => {
    const root = document.getElementById('root')
    if(isShow){
        document.getElementById('root').style.opacity = 1
    } else {
        document.getElementById('root').style.opacity = 0
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
    headImg: {
        margin: '0 auto',
        width: '100%',
        display: 'flex',
    },
    tag: {

    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 70,
        marginBottom: 50,
    },    
})

export default withStyles(styles)(Work)