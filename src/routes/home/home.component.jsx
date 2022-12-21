import { useState,useEffect } from 'react';
import Directory from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/Directory/Directory.component.jsx';
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/Directory/Directory.styles.scss';

const Home = () =>{

    const [categories, setCategories] = useState([])
 
  useEffect(() =>{
    let data = require('/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/catgeories.json');
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
    <div>
       
        <Directory 
            categories = {categories}
        />
        
    </div>
    
    
);
    
}

export default Home;