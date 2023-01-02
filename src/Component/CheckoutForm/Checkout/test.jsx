{checkoutToken.live.line_items.map((product)=>(
  <ListItem style={{padding:'10px 0'}} key={product.name}>
<ListItemText primary={product.name} secondary={`quantity:${product.quantity}`}/>
<Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>

</ListItem>
))}

<Typography variant='h5' gutterBottom>Order summary</Typography>
     <ListItem disablePadding>
     <ListItem style={{padding:'10px 0'}}>

         <ListItemText primary="total" />
         <Typography variant='subtitle1' style={{fontWeight: 700}}>

             {checkoutToken.live.formatted_with_symbol}
         </Typography>
     </ListItem>