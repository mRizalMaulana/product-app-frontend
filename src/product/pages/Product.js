import React, {useEffect, useState} from 'react';

import ProductList from '../components/ProductList';

const Product = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    const [loadedData, setLoadedData] = useState();

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://127.0.0.1:5000/api/products');
                const responseData = await response.json();
                
                setLoadedData(responseData);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getProducts();
    }, []);


return (
    <React.Fragment>
      {!isLoading &&  loadedData && <ProductList items={loadedData} />}
    </React.Fragment>
  );
}; 

export default Product;