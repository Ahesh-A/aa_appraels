import CategoryItem from "../category-item/category-item.component";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/category-item/category-item.styles.scss';
const Directory = ({categories})=> {
    return (
        <div className = "categories-container" >
      
            {categories.map((category) => (
                <CategoryItem 
                category = {category}
                key = {category.id}
                />
            ))};

        </div>
    );
}

export default Directory;