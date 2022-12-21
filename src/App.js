
import {Route,Routes} from 'react-router-dom';
import Home from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/home/home.component.jsx';
import NavigationBar from './routes/navigation/navigation.component';


const Shop = () =>{
  return (
    <h1>This is the shop page</h1>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path = '/' element = {<NavigationBar/>}>
        <Route index element = {<Home/>}/>  
        <Route path = 'shop' element = {<Shop/>}/>
      </Route>
      
    </Routes>
    //<Home/>
    
  );
     
}

export default App;
