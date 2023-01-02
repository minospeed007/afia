import React from 'react'
import {useCart} from 'react-use-cart'
import {useNavigate, Link} from 'react-router-dom'
const Cart=()=>{
    const navigate= useNavigate()
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items
    }= useCart()
const clearCart=()=>{
    emptyCart()
    navigate('/')
}
        {isEmpty ?  <h5 className='h'>Your cart is empty </h5> : <h3> hello</h3>}
return(<>
<section className="py-4 container">
<div className="row justify-content-center" >
   <div className="col-12"> 
   <h5 className="card-title"> Your Shopping Cart</h5> 
    <h4>cart ({totalUniqueItems})</h4>
    <h4>total ({totalItems})</h4>
    <table className=" table table-light table-hover m-0">
    <tbody>
        {items.map((item,index)=>{
            return(
            <tr  key={index}>
            <td>
                <img className="img" src={item.img}  alt=""/>
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>quantity{item.quantity}</td>
                <td>
               <button type='button'className="btn btn-info ms-2"
                onClick={()=>updateItemQuantity(item.id, item.quantity-1) }
               >-</button>
               <button type='button' className="btn btn-info ms-2"
                onClick={()=>updateItemQuantity(item.id, item.quantity+1) }
               >+</button>
               <button type='button'className="btn btn-danger ms-2"
                onClick={()=>removeItem(item.id) }
               >Remove item</button>
               </td>
            </tr>
        )})}
    </tbody>
    
    </table>
    </div>
    <div className="col-auto ms-auto">
    <h5>total price: $ {cartTotal }</h5>
    
    </div>
    <div className="col-auto">
    <button type='button' className='btn btn-danger ms-2'
    onClick={clearCart}
    >clear cart</button>
    <button component={Link} to='/checkout' className="btn btn-primary ms-2">Checkout</button>
    </div>
</div>
</section>
</>)
}
export default Cart