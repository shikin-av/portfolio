import React from 'react'
import {string, node, number, oneOfType} from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

class Message extends React.Component { 
    static propTypes = {
        message: oneOfType([string, node]).isRequired,
        type:    string,
        time:    number
    }
    
    static defaultProps = {
        time: 3000,
    }

    state = {
        open: true,
    }

    componentDidMount = () => {
        const {time} = this.props
        this.close(time)
    }

    componentWillReceiveProps = nextProps => {
        const {time} = nextProps
        this.setState({open: true}, () => this.close(time))        
    }

    close = time => {  
        setTimeout(() => {
            this.setState({open: false})            
        }, time)
    }

    colorSwitch = type => {
        switch(type){
            case 'warning': return {backgroundColor: red['A700']}
            case 'success': return {backgroundColor: green['A700']}
            default:        return {backgroundColor: blue['A700']}
        }
    }

    render() {
        const {open} = this.state
        const {
            message,
            type,
            time,
        } = this.props
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={() => this.close(0)}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
            >
                <SnackbarContent
                    message={<span id="message-id">{message}</span>}  
                    style={this.colorSwitch(type)}
                />
            </Snackbar>
        )
    }
}

export default Message

