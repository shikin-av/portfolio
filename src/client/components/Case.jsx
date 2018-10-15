import React from 'react'
import {string, func} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

class Case extends React.Component {
    static propTypes = {
        nameUrl: string.isRequired,
        save:    func,
    }

    state = {
        open: true,
    }
    
    componentWillReceiveProps = nextProps => {        
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false}, () => {
            if(this.props.save)
            {
                document.location.href = '/admin#/'
            } else {
                document.location.href = '/#/'
            }
        })
    }

    render() {
        const {classes, nameUrl} = this.props
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll='body'
                aria-labelledby='scroll-dialog-title'
            >
                <DialogContent className={classes.root}>
                    {this.props.nameUrl}
                </DialogContent>
            </Dialog>
        )
    }
}

const styles = () => ({
    root: {
        backgroundColor: 'white',
        color: 'black',
    }
})

export default withStyles(styles)(Case)