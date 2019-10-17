import React from 'react'
import { Input } from '../SignIn/Input/Input'
import { InputButton } from '../SignIn/Input-Button/Button'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.scss'


export class SignUp extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            )

        }
        catch (error) {
            alert(error.message);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with ypur email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                        label='Display Name'
                    />
                    <Input
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                        label='password'
                    />
                    <Input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                        label='Confirm Password'
                    />
                    <InputButton type='submit'>Sign Up</InputButton>
                </form>
            </div>
        )
    }

}