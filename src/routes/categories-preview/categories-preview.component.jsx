import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/shop/shop.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview title = {title} products = {products} key = {title}/>
            }

            )}
        </Fragment>
    );
}

export default CategoriesPreview;

