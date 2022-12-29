import { useContext } from "react";
import { ProductContext } from "../../components/contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
//import PRODUCT from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/shop-data.json';
import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/routes/shop/shop.styles.scss';

const Shop = () => {
    const {product} = useContext( ProductContext );
    return (
        <div className="products-container">
            {product.map((product) => {
                return (
                    <ProductCard
                        product={product}
                        key={product.id}
                    />
                );
            })}
        </div>
    );
}

export default Shop;

