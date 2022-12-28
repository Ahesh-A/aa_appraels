import SingIn from "../sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/Authentication/Authentication.styles.scss';
const Authentication  = () => {
    return (
        <div className = "authentication-container">
            <SingIn/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;