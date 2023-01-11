import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";
import {
  onAuthStateChangedListener,
  cerateUserDocumentFromAuth,
} from "./utils/firebase/firebse.utils";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authentication.component.jsx";
import Shop from "./routes/shop/shop.component";
//import CheckOut from './routes/check-out/check-out.component';
import CheckOut from "./routes/checkout/checkout.componet.jsx";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        cerateUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unSubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="check-out" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
