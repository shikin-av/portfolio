import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'


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

        //this.setState({message: 'hi peoplee'})

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
                        this.setState({ message: 'Ошибка сервера. Попробуйте позже, или обратитесь к администратору сайта' })
                    } else if(data.redirectTo){
                        console.log(data.redirectTo)
                        window.location.replace(data.redirectTo)
                    } else if(data.message){
                        this.setState({ message: data.message })
                    }
                })
            } catch(err) {
                const message = 'Ошибка авторизации'
                this.setState({message})
            }
        }
    }

    render(){
        const {classes} = this.props
        const {
            login,
            password,
            message,
        } = this.state
        return (
            <div className={classes.root}>
                <TextField
                    label='Логин'
                    value={this.state.login}
                    onChange={this.handleChange('login')}
                    variant='outlined'
                />
                <br/>
                <TextField
                    label='Пароль'
                    value={this.state.password}
                    onChange={this.handleChange('password')}                    
                    type='password'
                    variant='outlined'
                />
                <br/>
                <Button
                    variant='contained'
                    onClick={this.handleSubmit}
                    disabled={(!login || !password) ? true : false}
                >
                    Вход
                </Button>
                {
                    message &&
                    <div className={classes.message}>
                        {message}
                    </div>
                }             
            </div>
        )
    }
}

const styles = () => ({
    root: {
        margin: '25%',
    },
    message: {

    }
})

export default withStyles(styles)(Login)