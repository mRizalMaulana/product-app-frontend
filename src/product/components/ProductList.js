import React from "react";

import ProductItems from "./ProductItems";
import './ProductList.css';

const ProductList = props => {
    console.log(props); 
    if (props.items.length === 0) {
        return (<div> <h2> No Product </h2> </div>);
    }

    return (
        <ul className="product-list">
            {props.items.map(product => (
                <ProductItems 
                    key={product.sku}
                    id={product.sku}
                    name={product.productName}
                />
            ))}
        </ul>
    );
};

export default ProductList;