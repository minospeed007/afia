import React,{useState,useEffect} from 'react';
import { Paper, CardMedia, Grid,Input,
   CardContent, CardActions, Typography, 
   IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

import useStyles from './styles';

const Product = ({product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);
  

  return (
    <>
    
    <Grid container className="card-container">
    <Grid item  className='grid-card'>
    
  <Paper className='gridcard'>
  
    <div className='content-cards' >
      <div className='img-div'>

      <img src={product.image.url} 
    alt={product.name} className='img' title={product.name} />
    </div>
        <div className='p-div'>
        <p className='product-p'>
            {product.name}
          </p>
          <p className='product-p'>
            ${product.price.formatted}
          </p>
         
          </div>
          <div className='product-typo' >
          <Typography 
         dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2" color="textSecondary" component="p" />
          </div>
          <CardActions disableSpacing className='action-cart'>
        <button className='btn-cart' onClick={handleAddToCart}>
          Add to Cart <AddShoppingCart className="cart"/>
        </button>
      </CardActions>
      </div>
  
 
      </Paper>
     
    </Grid>
    </Grid>
    </>
  );
};

export default Product;