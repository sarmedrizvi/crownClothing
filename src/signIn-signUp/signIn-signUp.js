import React from 'react';
import './signIn-signUp.scss';
import  SignIn  from './SignIn/SignIn';
import  SignUp  from './Sign Up/SignUp'
export const SignInsignUp = () => (
    <div className='signInSignUp'>
        <SignIn />
        <SignUp />
    </div>
)