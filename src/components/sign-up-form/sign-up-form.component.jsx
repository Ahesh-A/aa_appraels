import { useState, useContext } from "react";
import {
    createAuthUserWithEmailAndPassword,
    cerateUserDocumentFromAuth
} from "../../utils/firebase/firebse.utils";

import FormInput from "../form-input/form-input.component.jsx";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/sign-up-form/sign-up-form.styles.scss';
import Button from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/button/Button.component.jsx';
import { UserContext } from "../contexts/user.context";

const defaultFormFileds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};



const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFileds);
    const { displayName, email, password, confirmPassword } = formFields;
    const val = useContext (UserContext);

    console.log(val);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFileds);
    }

    const submitHandler = async (event) => {

        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password and confirm password doesn\'t match');
            return;
        }


        try {
            //const {user}  = await createAuthUserWithEmailAndPassword(email, password);
            //user.displayName = displayName;
            //cerateUserDocumentFromAuth(user);
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await cerateUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use, choose some other');
            } else {
                console.log('user ceration encountered an error', error)
            }

        }



    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler} >

                <FormInput
                    label="name"
                    type="text"
                    required
                    onChange={changeHandler}
                    name='displayName'
                    value={displayName}

                />

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

                <FormInput
                    label="confirm password"
                    type="password"
                    required
                    onChange={changeHandler}
                    name='confirmPassword'
                    value={confirmPassword}

                />

                <Button 
                    type="submit"
                     >Submit</Button>
            </form>
        </div>
    );
};

export default SignUpForm;