import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../components/contexts/user.context';
import { ReactComponent as CrwnLogo } from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/assets/crown.svg';
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/navigation/navigation.styles.scss';
import { auth, googleSignOut } from '../../utils/firebase/firebse.utils';

const NavigationBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    console.log(currentUser);

    const handleSignOut = () => {
        googleSignOut(auth).then(() => {
            setCurrentUser(null);
            console.log('signed out successully...');
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>
                        Shop
                    </Link>
                    {
                        currentUser ?
                            (<span className="nav-link" onClick={handleSignOut}>Sign Out</span>) :
                            <Link className='nav-link' to={'/auth'}>
                                Sign In
                            </Link>
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;