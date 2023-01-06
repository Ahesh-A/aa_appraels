
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation/navigation.component';
import Authentication from './routes/Authentication/Authentication.component.jsx';
import Shop from './routes/shop/shop.component';
//import CheckOut from './routes/check-out/check-out.component';
import CheckOut from './routes/checkout/checkout.componet.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='check-out' element={<CheckOut />}/>
      </Route>
    </Routes>
    //<Home/>

  );

}

export default App;
