import React from 'react'

import Message from 'client/components/common/Message'
import Work from 'client/components/Work/Work'
import workInputs from 'client/components/Work/workInputs'

const WorkAdmin = Work => 
    class extends React.Component {
        state = {
            message: null,
        }

        openMessage = ({message, type}) => {
            const properties = {message, type}
            this.setState({
                message: <Message {...properties}/>
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

            //TODO save to DB
            this.openMessage({
                message: 'Кейс сохранен',
                type: 'success',
            })            
        }

        render() {
            const {
                message,
            } = this.state
            const {classes} = this.props
            return (
                <div>
                    <Work 
                        {...this.props}
                        save={this.save}     //TODO + this.edit , this.delete 
                    />                    
                    {message}
                </div>
            )
        }
    }

export default WorkAdmin(Work)