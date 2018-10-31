import React from 'react'
import {connect} from 'react-redux'

import Message from 'client/components/common/Message'
import Work, {showHomeContent} from 'client/components/Work/Work'
import workInputs from 'client/components/Work/workInputs'

import {
    appendWork  as appendWorkAction,
    editWork    as editWorkAction,
    deleteWork  as deleteWorkAction,
} from 'client/data/actions/admin'

class WorkAdmin extends React.Component {
    state = {
        message: null,
        mode:    'edit',
    }

    openMessage = ({message, type}) => {
        const properties = {message, type}
        this.setState({
            message: <Message {...properties}/>
        })
    }

    save = ({work, nameUrl}) => {
        const {
            appendWorkAction,
            editWorkAction,
        } = this.props
        for(let input of workInputs){
            if(input.required && !work[input.id]){
                this.openMessage({
                    message: 'Обязательные поля не заполнены',
                    type: 'warning',
                })
                return
            }
        }               
        
        if(nameUrl === 'create'){
            appendWorkAction(work, ({message, type}) => {
                this.openMessage({message, type})
                //this.closeDialog()
            })                
        } else {
            editWorkAction(nameUrl, work, ({message, type}) => {
                this.openMessage({message, type})
                //this.closeDialog()
            })                
        }                      
    }

    closeDialog = () => {
        showHomeContent(true)
        setTimeout(() => {
            document.location.href = '/admin#/'
        }, 500)  
    }

    changeMode = mode => {
        this.setState({mode})
    }

    render() {
        const {
            message,
            mode,
        } = this.state
        const {classes} = this.props
        return (
            <div>
                <Work 
                    {...this.props}
                    save={this.save}     //TODO + this.edit , this.delete 
                    changeMode={this.changeMode}
                    mode={mode}
                />                    
                {message}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //selectors
})

const mapDispatchToProps = {
    appendWorkAction,
    editWorkAction,
    deleteWorkAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkAdmin)