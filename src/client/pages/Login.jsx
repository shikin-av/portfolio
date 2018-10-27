import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import InputCustom from 'client/components/common/InputCustom'
import Message from 'client/components/common/Message'

class Login extends React.Component {
    state = {
        message:  null,
        login:    '',
        password: '',
    }

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value,
        })
    }

    handleSubmit = () => {
        const {
            login,
            password,
        } = this.state

        if(login && password){
            try {
                return fetch('/login',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    redirect: 'follow',
                    body: JSON.stringify({
                        login,
                        password
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.error){
                        this.openMessage({
                            message: 'Ошибка сервера. Попробуйте позже, или обратитесь к администратору сайта',
                            type:    'warning',
                        })
                    } else if(data.redirectTo){
                        console.log(data.redirectTo)
                        window.location.replace(data.redirectTo)
                    } else if(data.message){
                        this.openMessage({
                            message: data.message,
                            type:    'warning',
                        })
                    }
                })
            } catch(err) {
                const message = 'Ошибка авторизации'
                this.setState({message})
            }
        }
    }

    openMessage = ({message, type}) => {
        const properties = {message, type}
        this.setState({
            message: <Message {...properties}/>
        })
    }

    render(){
        const {classes} = this.props
        const {
            login,
            password,
            message,
        } = this.state

        const inputStyle = {
            root: {
                marginTop: 0,
                marginBottom: 0,
                display: 'flex',
            }
        }        

        return (
            <div>
                {message}
                <div className={classes.authorize}>
                    <InputCustom
                        label='Логин'
                        value={this.state.login}
                        onChange={this.handleChange('login')}
                        styleRoot={inputStyle.root}
                    />                
                    <InputCustom
                        label='Пароль'
                        value={this.state.password}
                        onChange={this.handleChange('password')}                    
                        type='password'
                        styleRoot={inputStyle.root}
                    />
                    <Button
                        variant='contained'
                        onClick={this.handleSubmit}
                        disabled={(!login || !password) ? true : false}
                        className={classes.submit}
                    >
                        Вход
                    </Button>
                </div>
            </div>
        )
    }
}

const styles = () => ({
    authorize: {
        top: '40%',
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
        position: 'fixed',
    },    
    submit: {
        marginTop: 16,
        width: '98%',
        marginLeft: '1%',
        height: 38,
    }
})

export default withStyles(styles)(Login)