import React from 'react';


import Product from './Product/product';
import useStyles from './styles';
import{Input,Grid, CircularProgress} from '@mui/material';

const Products = ({ products, setProducts,setSearch,searchProduct, onAddToCart }) => {
    const classes = useStyles();
    
    
    if (!products.length) return <CircularProgress className="circular"/>;
  
    return (<>
     
        <div  className='prod-div'>

          {searchProduct?.map((product) => (
            <div className='product-div'>
              <Product product={product} key={product.id} 
               setProducts={setProducts} 
               onAddToCart={onAddToCart} />
           </div>
          ))}
        </div>
        </>
    );
  };
  
  export default Products;