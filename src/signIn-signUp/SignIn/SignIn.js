import React, { Component } from 'react'
import './SignIn.scss';
import { Input } from './Input/Input';
import { InputButton } from './Input-Button/Button';
// import { Link, Route } from 'react-router-dom';
// import { auth, SignInWithGoogle } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { SetCurrentUser } from '../../Redux/User/User.Actions';
// import { Homepage } from '../../Homepage/homepage'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        label: ''
    }
    HandleSubmit = async event => {
        const { email, password } = this.state;
        event.preventDefault();
        fetch('http://localhost:3000/SignIn', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then(res => res.json())
            .then(customer => {
                    (customer === 'Wrong Credentials' || customer === 'no such user') ?
                    this.setState({ label: 'Wrong Credentials' })
                    :
                    this.props.addUser(customer)

            }
            )

    }


    HandleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='SignIn'>
                <h2>Are you already registered</h2>
                <span>Sign in with your email & password</span>
                <form onSubmit={this.HandleSubmit}>
                    <Input
                        name='email'
                        value={this.state.email}
                        required
                        type='email'
                        label='Email'
                        handleChange={this.HandleChange}

                    />
                    <Input
                        name='password'
                        value={this.state.password}
                        required
                        type='password'
                        label='Password'
                        handleChange={this.HandleChange}
                    />
                    <label>{this.state.label}</label>
                    <div className='Button'>
                        <InputButton
                            type='submit'>Sign In</InputButton>
                        {/* <InputButton onClick={SignInWithGoogle} isGoogleButton>Sign In With Google</InputButton> */}
                    </div>
                </form>
            </div>
        )
    }

}

const dispatchToProp = dispatch => ({
    addUser: user => dispatch(SetCurrentUser(user))
})

export default connect(null, dispatchToProp)(SignIn)