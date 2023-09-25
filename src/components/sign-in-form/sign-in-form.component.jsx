import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { UserContext } from "../../contexts/user.context";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('Email do not exists!');
                    break;
                case 'auth/wrong-password':
                    alert('Password is incorrect!');
                    break;
                default:
                    console.log('Error creating user: ', error.message);  
            };
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password:</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' required type='password' onChange={handleChange} name='password' value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign Up</Button>
                    <Button type='button' buttonTypes='google' onClick={signInGoogleUser}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;