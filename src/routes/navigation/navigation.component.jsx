import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../components/contexts/user.context';
import { ReactComponent as CrwnLogo } from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/assets/crown.svg';
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/navigation/navigation.styles.scss';
import { auth, googleSignOut } from '../../utils/firebase/firebse.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../components/contexts/cart.context';
const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);

    const {isopen} = useContext(CartContext);

   

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
                            (<span className="nav-link" onClick={() => { googleSignOut(auth) }}>Sign Out</span>) :
                            <Link className='nav-link' to={'/auth'}>
                                Sign In
                            </Link>
                    }
                    <CartIcon />

                </div>
                {isopen && <CartDropdown/>}
                
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;