import React from 'react';
import { Paper,  Grid,Typography } from '@mui/material';


const AdminProduct = ({product }) => {

  

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
          
      </div>
  
 
      </Paper>
     
    </Grid>
    </Grid>
    </>
  );
};

export default AdminProduct;