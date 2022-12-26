import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { 
    signInWithGooglePopup,
    cerateUserDocumentFromAuth, 
     
    } from "../../utils/firebase/firebse.utils";
    
const SingIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await cerateUserDocumentFromAuth(user);
    }
    
    return (
        <div>
            <h1>Sign In Page </h1>        
            <button onClick={logGoogleUser}>Sign in with google</button>
            <SignUpForm/>
            
        </div>  
    );
}

export default SingIn;