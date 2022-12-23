
import { signInWithGooglePopup,cerateUserDocumentFromAuth } from "../../utils/firebase/firebse.utils";
const SingIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await cerateUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>This is the sign in page </h1>        
            <button onClick={logGoogleUser}>Sign in with google</button>
        </div>  
    );
}

export default SingIn;