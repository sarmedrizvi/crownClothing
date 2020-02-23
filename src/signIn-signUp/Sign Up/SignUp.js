import React from 'react'
import { Input } from '../SignIn/Input/Input'
import { InputButton } from '../SignIn/Input-Button/Button'
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.scss'
import { SetCurrentUser } from '../../Redux/User/User.Actions'
import { connect } from 'react-redux'


class SignUp extends React.Component {

    state = {
        label: '',
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: ''
    }
    handleSubmit = () => {

        try {
            const { displayName, email, password, confirmPassword, address, phone, city, country, postalCode } = this.state;
            fetch('http://localhost:3000/signup', {
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    displayName: displayName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                    address: address,
                    city: city,
                    postalCode: postalCode,
                    country: country,
                    phone: phone,
                })
            }).then(res => res.json())
                .then(customer => {
                    customer == 'Something is wrong' ? this.setState({ label: 'Something is wrong' }) :
                        this.props.setUser(customer)
                }

                )

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    address: '',
                    city: '',
                    postalCode: '',
                    country: '',
                    phone: ''
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
        const { label, displayName, email, password, confirmPassword, address, phone, city, country, postalCode } = this.state;
        return (

            <form className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <div className='sign-up-form'>
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
                    <Input
                        type='address'
                        name='address'
                        value={address}
                        handleChange={this.handleChange}
                        required
                        label='Address'
                    />
                    <Input
                        type='text'
                        name='city'
                        value={city}
                        handleChange={this.handleChange}
                        required
                        label='City'
                    />
                    <Input
                        type='text'
                        name='country'
                        value={country}
                        handleChange={this.handleChange}
                        required
                        label='Country'
                    />
                    <Input
                        type='text'
                        name='postalCode'
                        value={postalCode}
                        handleChange={this.handleChange}
                        required
                        label='Postal Code'
                    />
                    <Input
                        type='tel'
                        name='phone'
                        value={phone}
                        handleChange={this.handleChange}
                        required
                        label='Phone Number Format: 0323-3232664'
                        pattern="[0-9]{4}-[0-9]{7}"
                    />
                    <label>{label}</label>
                    <InputButton type='submit' onClick={this.handleSubmit}>Sign Up</InputButton>
                </div>
            </form>
        )
    }

}
const dispatchToProp = (dispatch) => ({
    setUser: user => dispatch(SetCurrentUser(user))
})
export default connect(null, dispatchToProp)(SignUp)