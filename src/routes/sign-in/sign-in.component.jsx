import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/Button.component";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/sign-in/sign-in.styles.scss';
import {
    signInWithGooglePopup,
    cerateUserDocumentFromAuth,
    signInWithGoogleEmailAndPassword

} from "../../utils/firebase/firebse.utils";

const defaultFormFields = {
    email: '',
    password: ''
};

const SingIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
         await cerateUserDocumentFromAuth(user);
    }

    const loginWithEmailAndPassword = async (event) => {
        event.preventDefault();
        try {
            await signInWithGoogleEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch (error) {
            console.log('Cannot login with email and password', error);
        }

    }

    return (
        <div className="sign-in-container">
            <h2> Already have an account? </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={loginWithEmailAndPassword}>
                <FormInput
                    label="email"
                    type="email"
                    required 
                    onChange={changeHandler}
                    name='email'
                    value={email}
                />
                <FormInput
                    label="password"
                    type="passwordustd"
                    required 
                    onChange={changeHandler}
                    name='password'
                    value={password}
                />
                <div className="buttons-container">
                    <Button type='submit' >Sign In</Button>
                    <Button buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SingIn;