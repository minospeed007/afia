import React from 'react';


import AdminProduct from './AdminProduct';
import{ CircularProgress} from '@mui/material';

const AdminProducts = ({ products, setProducts,searchProduct, onAddToCart }) => {
    
    
    if (!products.length) return <CircularProgress className="circular"/>;
  
    return (<>
     
        <div  className='prod-admin'>

          {searchProduct?.map((product) => (
            <div className='product-div'>
              <AdminProduct product={product} key={product.id} 
               setProducts={setProducts} 
               onAddToCart={onAddToCart} />
           </div>
          ))}
        </div>
        </>
    );
  };
  
  export default AdminProducts;