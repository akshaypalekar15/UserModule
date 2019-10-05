import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';
import './Login.css';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    validateUser() {
        if (this.state.username === '') {
            alert('Please enter the username');
        } else if (this.state.password === '') {
            alert('Please enter the password');
        } else {
            this.props.userLogin(true);
        }

    }

    setUsername(e) {
        this.setState({ username: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <h2 className='login-title'>Login</h2>
                <div className='input-container'>
                    <input
                        type='text'
                        placeholder='Username'
                        className='input-text'
                        value={this.state.username}
                        onChange={this.setUsername.bind(this)} />
                    <input
                        type='password'
                        placeholder='Password'
                        className='input-text'
                        value={this.state.password}
                        onChange={this.setPassword.bind(this)} />
                    <input type='button' value='Login' className='input-btn' onClick={this.validateUser.bind(this)} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (bool) => { dispatch(userLogin(bool)) }
    }
}

export default connect(null, mapDispatchToProps)(Login)