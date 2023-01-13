import "./category.styles.scss";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const Category = () => {
  console.log("rendering and rerendering category component");

  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    const filteredProducts = categoriesMap[category];
    console.log("effect fired calling setproducts");
    setProducts(filteredProducts);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
