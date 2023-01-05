import { useState, useContext } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../../components/button/Button.component";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/sign-in/sign-in.styles.scss';
import {
    signInWithGooglePopup,
    signInWithGoogleEmailAndPassword

} from "../../utils/firebase/firebse.utils";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: ''
};

const SingIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.log(error);
        }
        
    }

    const loginWithEmailAndPassword = async (event) => {
        event.preventDefault();
        try {
           const {user} = await signInWithGoogleEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            setCurrentUser(user);
            //setCurrentUser()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }

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
                    type="password"
                    required
                    onChange={changeHandler}
                    name='password'
                    value={password}
                />
                <div className="buttons-container">
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SingIn;