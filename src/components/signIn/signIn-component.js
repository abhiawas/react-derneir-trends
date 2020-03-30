import React from 'react';
import './signIn-styles.scss';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import {signInWithGoogle} from '../../firebase/firebase-utils'
import GoogleButton from '../custom-button/custom-button-google-component'
class SignIn extends React.Component{
    constructor(){
        super();
        
        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email:"",
            password:""
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})

    }

    render(){
        return(
            <div className="sign-in" >
            <h2>I already have an Account</h2>
            <span> Sign in with your email and password </span>
            <form onSubmit={this.handleSubmit} >
                <FormInput 
                        name='email' 
                        type='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required  />
                <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required    /> 
                <div className="button">              
                    <CustomButton  type='submit'> Sign In </CustomButton>
                    <GoogleButton type='submit' onClick={signInWithGoogle}> Sign In with Google  </GoogleButton>
                </div>
            </form>
            
        </div>
        )
    }
}


export default SignIn;