import React from 'react'
import Product from './Product/product'
import data from './data'
const Products=()=>{
return(<>
<section className="py-4 container">
<div className="row justify-content-center">
{data.productData.map((item, index)=>{
return(
    <Product img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
       key={index}
    />
)
})}
 </div>   
</section>
</>)
}
export default Products