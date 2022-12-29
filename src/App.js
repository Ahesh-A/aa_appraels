
import { Route, Routes } from 'react-router-dom';
import Home from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/home/home.component.jsx';
import NavigationBar from './routes/navigation/navigation.component';
import Authentication from './routes/Authentication/Authentication.component.jsx';
import Shop from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/shop/shop.component.jsx';

const App = () => {

  return (
    <Routes>
        <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
    //<Home/>

  );

}

export default App;
