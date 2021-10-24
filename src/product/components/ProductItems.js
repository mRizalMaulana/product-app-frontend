import React from "react";

import './ProductItems.css';

const ProductItems = props => {
    return (
        <li className="card">
            <div>
                <div>
                    <p>{props.name}</p> 
                </div>
                <div>
                    <p>SKU : {props.id}</p>
                </div>
            </div>
        </li>
    );
};

export default ProductItems;