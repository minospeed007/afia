import React from 'react'
import { Typography, Button, Card ,
    CardActions} from '@mui/material'
import  './styles.css'

const CartItem= ({item, onUpdateCartQty,onRemoveFromCart})=>{
    return(<>
    <div className='parent-card'>
    <Card className='gridcard'>
   <div className='img-div'>
    <img src={item.image.url} 
    alt={item.name} className='pic' />
    </div>
    <div className='card-content'>
    
        <h5 className='heading'> {item.name}</h5>
         <h5 className='heading'>{item.price.formatted_with_symbol}</h5>


        
       
    
    <div >
    <CardActions className='cardActions'>
        <div className='buttons'>
          <Button type="button" size="small" onClick={() => 
          onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => 
          onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
      </CardActions>
      <div className='remove'>
      <Button variant="contained" type="button" color="secondary"
       onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
       </div>
      </div>
    </div>
    </Card>
    
</div>
    </>)
}

export default CartItem