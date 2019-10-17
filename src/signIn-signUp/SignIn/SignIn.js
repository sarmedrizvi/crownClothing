import React,{Component} from 'react'
import './SignIn.scss';
import {Input} from './Input/Input';
import {InputButton} from './Input-Button/Button';
import {auth,SignInWithGoogle} from '../../firebase/firebase.utils'
export class SignIn extends Component
{
    state={
        email:'',
        password:''
    }
    HandleSubmit=async event=>{
        const {email,password}=this.state;
        event.preventDefault();
        try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState(
            {
                email:'',
                password: ''
            }
           ) 
        }
        catch(error)
        {
            console.error(error);
        }
    }
             
    
    HandleChange=event=>{
       const {name,value}= event.target;
       this.setState({[name]:value});
    }

    render()
    {
        return(
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
                <div className='Button'>
                <InputButton 
                    type='submit'>Sign In</InputButton>
                <InputButton onClick={SignInWithGoogle} isGoogleButton>Sign In With Google</InputButton>
                </div>
                </form>
            </div>
        )
    }
    
}