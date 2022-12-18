import React from 'react';
import useProducts from '../../hooks/useProducts';

function Products() {
  const {
    getProducts: { data, isLoading },
  } = useProducts();
  console.log(data, isLoading);

  return <div>Products</div>;
}

export default Products;
