import {Routes, Route} from 'react-router-dom'
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/shop/shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
const Shop = () => {
    
    return (
        <Routes>
            <Route index element = {<CategoriesPreview />}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    );
}

export default Shop;

