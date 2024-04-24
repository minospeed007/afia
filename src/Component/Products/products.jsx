import {useState, useEffect} from 'react';
import { CircularProgress, Grid} from '@mui/material';
import './styles.css';
import {useSearch} from '../../context/searchContext';


import {commerce } from '../../lib/commerce'

import Product from './Product/product';

const Products = ({  onAddToCart }) => {
  const [products , setProducts]=useState([])
    const [searchProducts, setSearchProducts]=useState([])
    const {search, }=useSearch();

    const fetchProduct= async ()=>{
      const{data} = await commerce.products.list()
       setProducts(data)
       console.log(data)
    }
    useEffect(()=>{
      fetchProduct()
     },[])
     
  useEffect(() => {
    const filteredData = products?.filter((item) => item?.name?.toLowerCase().includes(search.toLocaleLowerCase()))
                        
    setSearchProducts(filteredData);
}, [products, search]);

console.log(searchProducts,"search product products")





  // If searchProducts is undefined or empty, render a loading message
  if (!searchProducts || searchProducts.length === 0) return<div className='circular'><CircularProgress/></div> ;

  return (<>
   <div className='product-root' />
      
    
              <main className='contents'>

      <Grid container justify="center" spacing={4} className='products-grids'>
        {searchProducts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} className='products-grid' >
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </>
  );
};

export default Products;
