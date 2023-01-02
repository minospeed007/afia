import React from 'react'
import {Typography, List, ListItem,ListItemText} from '@mui/material'

const Review=({checkoutToken})=>{
 return(
     <>
     <div >
     <h5 className='review-heading' >Order summary</h5>
     <List disablePadding>
       {checkoutToken.live.line_items.map((product)=>(
           <ListItem style={{padding:'10px 0'}} key={product.name}>
           <ListItemText primary={product.name} secondary={`quantity: ${product.quantity}`}/>
           <Typography variant='body2'>{product.line_total_formatted_with_symbol}</Typography>

           </ListItem>
       ))}  
       <ListItem style={{padding:'10px 0'}}>
           <ListItemText primary="Total" secondary={checkoutToken.live.subtotal.formatted_with_symbol} />
     <Typography variant='subtitle1' style={{fontWeight:700}}>
     
     </Typography>
           
       </ListItem>
     </List>
</div>
     
</>
 )
}

export default Review