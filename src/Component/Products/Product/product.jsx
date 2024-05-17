import { Paper, Grid,
    CardActions, Typography,  } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './styles.css';

const Product = ({product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);
  

  return (
    <>
    <div className='space' ></div>
    <Grid container className="card-container">
    <Grid item  className='grid-cards'>
    
  <Paper className='grid-card'>
  
    <div className='content-cards' >
      <div className='img-div'>

      <img src={product.image.url} 
    alt={product.name} className='imgs' title={product.name} />
    </div>
        <div className='p-div'>
        <p className='product-p'>
            {product.name}
          </p>
          <p className='product-p'>
            ${product.price.formatted}
          </p>
         
          </div>
          <div className='product-desc' >
          <Typography 
         dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2" color="textSecondary" component="p" />  
           </div>
          <div className='rating-div'>
      <Stack spacing={1} sx={{ '& .MuiRating-icon': { fontSize: '16px' } }}>
  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
</Stack>
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