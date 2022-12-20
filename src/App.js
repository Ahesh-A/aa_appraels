import './App.css';
import './categories.styles.scss';
import { useState,useEffect } from 'react';
import './components/category-item/category-item.styles.scss'
import './components/Directory/Directory.styles.scss'
//import 
import Directory from './components/Directory/Directory.component.jsx'

const App = () => {

  const [categories, setCategories] = useState([])
 
  useEffect(() =>{
    let data = require('./Data/catgeories.json');
    setCategories(data);
    
  },[categories]);

  return (
    // <div className = "categories-container" >
      
    //   {categories.map((category) => (
    //     <CategoryItem 
    //       category = {category}
    //       key = {category.id}
    //     />
    //   ))};

    // </div>
    <Directory 
      categories = {categories}
      />
  );
}

export default App;
