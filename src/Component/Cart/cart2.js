import React from 'react'
import {Container, Typography, Button, Grid} from '@mui/material'
import useStyles  from './styles'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/cartItem'
const Cart=({cart,handleUpdateCartQty,
    handleRemoveFromCart, handleEmptyCart})=>{
    const classes = useStyles()

    const EmptyCart=()=>{
return(
        <Typography  variant='subtitle1'>
            You have no item in your shopping cart
        <Link to='/' className={classes.link}>Add item to cart</Link>
        </Typography>
)}
const FilledCart=()=>{
    return(<>
        <Grid container spacing={3}>
            {cart.line_items?.map((item)=>{
               return <Grid item xs={12} sm={4} key={item.id}>
                       <CartItem item={item} 
                       onUpdateCartQty={handleUpdateCartQty}
                       onRemoveFromCart={handleRemoveFromCart}
                           />
                </Grid>
            })
            }
            </Grid>
            <div className={classes.cardDetails}>
            <Typography variant='h5'>
                    subtotal:{cart.subtotal?.formatted_with_symbol}
                </Typography>
                <div>
             <Button className={classes.emptyButton} size='large' type='button'
             variant='contained' color='secondary'
              onClick={handleEmptyCart}>
             empty cart</Button>
             <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button'
             variant='contained' color='primary'>checkout</Button>
                </div>
            </div>
    </>)
    }
if(!cart?.line_items) return 'Loading'

    return(
    <Container >
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant ='h5' >
         Your shopping Cart
        </Typography>
        {!cart.line_items?.length? <EmptyCart/> : <FilledCart />}
    </Container>
    )
}

export default Cart