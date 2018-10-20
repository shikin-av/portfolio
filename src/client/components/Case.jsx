import React from 'react'
import {string, func} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'

import {textFake} from 'client/fakeData'

class Case extends React.Component {
    static propTypes = {
        nameUrl: string.isRequired,
        save:    func,
    }

    state = {
        open: true,
    }
    
    componentDidMount = () => {
        document.getElementById('root').style.opacity = 0
    }

    componentWillReceiveProps = nextProps => {        
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false}, () => {
            document.getElementById('root').style.opacity = 1
            if(this.props.save)
            {
                document.location.href = '/admin#/'
            } else {
                document.location.href = '/#/'
            }
        })
    }

    dialogTransition = props => (
        <Slide direction='up' {...props}/>
    )

    render() {
        const {classes, nameUrl} = this.props
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll='body'
                id='casedialog'
                TransitionComponent={this.dialogTransition}
            >
                <DialogContent className={classes.content}>
                    <DialogContentText dangerouslySetInnerHTML={{__html: textFake}}>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        )
    }
}

const styles = () => ({
    content: {        
        color: 'black',        
    }
})

export default withStyles(styles)(Case)