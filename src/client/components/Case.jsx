import React from 'react'
import {string} from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

class Case extends React.Component {
    static propTypes = {
        nameurl: string.isRequired,
    }

    state = {
        open: true,
    }
    
    componentWillReceiveProps = nextProps => {        
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        const {classes, nameurl} = this.props
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll='body'
                aria-labelledby='scroll-dialog-title'
            >
                <DialogContent className={classes.root}>
                    {this.props.nameurl}
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