import React from 'react';
import{Container,Grid} from '@mui/material';


import Product from './Product/product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
  
    if (!products.length) return <p>Loading...</p>;
  
    return (
        <div  className='prod-div'>

          {products.map((product) => (
            
              <Product product={product}key={product.id}  onAddToCart={onAddToCart} />
           
          ))}
        </div>
    );
  };
  
  export default Products;