import { useContext } from "react";
import { ProductContext } from "../../components/contexts/product.context";
//import PRODUCT from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/shop-data.json';
const Shop = () => {
    const {product} = useContext( ProductContext );
    return (
        <div>
            {product.map(({name, id}) => {
                return (
                    <h1 key = {id}>
                        {name}
                    </h1>
                );
            })}
        </div>
    );
}

export default Shop;

