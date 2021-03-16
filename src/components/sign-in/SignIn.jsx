import React from 'react';
import ContainedButton from '../contained-button/ContainedButton';
import FormInput from '../form-input/FormInput';

import './styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleOnSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label="email"
                        value={this.state.email} 
                        onChange={this.handleOnChange}
                        required />
         
                    <FormInput 
                        name='password' 
                        type='password' 
                        label="password"
                        value={this.state.password} 
                        onChange={this.handleOnChange}
                        required />

                    <div className='buttons'>
                    <ContainedButton type='submit'>
                       Sign in
                   </ContainedButton>
                   <ContainedButton onClick={signInWithGoogle} isGoogleSignIn>
                       Sign in with Google
                   </ContainedButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;