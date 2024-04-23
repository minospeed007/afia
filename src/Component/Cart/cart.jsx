import React from 'react'
import { Typography, Button, Box} from '@mui/material'
import './styles.css'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/cartItem'

const Cart=({cart,handleUpdateCartQty,handleRemoveFromCart, handleEmptyCart})=>{
    


const EmptyCart = () => {
  return (
    <div className='add-cart-parent'>
      <div className='add-cart'>
        <div>
          <h5 className='title'>You have no items in your shopping cart</h5>
        </div>
        <div className='add-link'>
          <Link to='/' className='link'>
            <button className='add-cart-btn'>Add items to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


const FilledCart=()=>{
    return(<>
         <h3 className='shop-cart' >Your Shopping Cart </h3>

        <div className="parent-card">
            {cart.line_items?.map((item)=>{
               return <div key={item.id} className='cart-id'>
                       <CartItem item={item} 
                       onUpdateCartQty={handleUpdateCartQty}
                       onRemoveFromCart={handleRemoveFromCart}
                           />
                </div>
            })
            }
            </div>
            <div className='cardDetails'>
            <h5 className='sub-heading'>
                    Subtotal:{cart.subtotal?.formatted_with_symbol}
                </h5>
                </div>
                <div className='box'>
                <div className='box1'> 
                <Box display="flex" justifyContent="space-between">
<Button className='empty'  size='small' type='button'
             variant='contained' color='secondary'
              onClick={handleEmptyCart}>
             Empty cart</Button> </Box>
             </div>
             <div className='box1'>
 <Button className='checkoutButton'
 component={Link} to='/checkout'  size='small' type='button'
             variant='contained' color='primary'>Checkout</Button>
            </div>
             </div>
                
            
    </>)
    }
if(!cart?.line_items) return 'Loading'

    return(<>

        <div className='test'>  

        <div className='toolbar' />


        {!cart.line_items?.length? <EmptyCart/> : <FilledCart />}
   
    </div>

    </> )
}

export default Cart