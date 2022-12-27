import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/assets/crown.svg';

import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/navigation/navigation.styles.scss';
const NavigationBar = () =>{
    return (
      <Fragment>
        <div className = 'navigation'>
            <Link className = 'logo-container' to = '/'>
                <CrwnLogo/>
            </Link>
            
            <div className="nav-links-container">
                <Link className='nav-link' to={'/shop'}>
                    Shop
                </Link>
                <Link className='nav-link' to={'/auth'}>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>  
    )
  }

  export default NavigationBar;