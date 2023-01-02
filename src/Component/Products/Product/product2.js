import React from 'react';
import { Card, CardMedia,
   CardContent, CardActions, Typography, 
   IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <>
    <div className='contain'>
  <Card className='card'>
  <div className='img-div'>
  <img src={product.image.url} 
    alt={product.name} className='img' title={product.name} />
  </div>
      
      <CardContent className='card2'>
        <div className='p-div'>
        <p className='product-p'>
            {product.name}
          </p>
          </div>
          <div className='p-div'>
          <p>
            ${product.price.formatted}
          </p>
          </div>
        <Typography
         dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </div>
    </>
  );
};

export default Product;