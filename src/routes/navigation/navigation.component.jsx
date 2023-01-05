import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/assets/crown.svg";
import { auth, googleSignOut } from "../../utils/firebase/firebse.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavLink,
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  const { isopen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to={"/shop"}>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span'
              onClick={() => {
                googleSignOut(auth);
              }}
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isopen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
