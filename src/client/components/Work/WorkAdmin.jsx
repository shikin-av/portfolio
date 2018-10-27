import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import withStyles from '@material-ui/core/styles/withStyles'

import Work from 'client/components/Work/Work'
import workInputs from 'client/components/Work/workInputs'

const WorkAdmin = Work => 
    class extends React.Component {
        state = {
            openedMessage: false,
            message:        '',
            messageType:   null,
        }

        openMessage = ({message, type}) => {
            console.log(message) 
            this.setState({
                openedMessage: true,
                message,
                messageType: type,
            })
        }

        closeMessage = () => {
            this.setState({
                openedMessage: false,
                message:        '',
                messageType:   null,
            })
        }
        
        save = work => {
            for(let input of workInputs){
                if(input.required && !work[input.id]){
                    this.openMessage({
                        message: 'Обязательные поля не заполнены',
                        type: 'warning',
                    })
                    return
                }
            }

            //this.props.save(work)     // in Admin component

            this.openMessage({
                message: 'Кейс сохранен',
                type: 'success',
            })
            //TODO save to DB
        }

        render() {
            const {
                openedMessage, 
                message,
                messageType,
            } = this.state
            const {classes} = this.props
            return (
                <div>
                    <Work 
                        {...this.props}
                        save={this.save}     //TODO + this.edit , this.delete 
                    />
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={openedMessage}
                        onClose={this.closeMessage}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        classes={{root: classes.message}}
                        message={<span id="message-id">{message}</span>}
                    />
                </div>
            )
        }
    }

const styles = themes => ({
    message: {
        textAlign: 'center',
    }
})

export default withStyles(withStyles)(WorkAdmin(Work))