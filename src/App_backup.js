import React, {useState, useEffect} from 'react'
//import Products from './Component/Products/products'
//import Navbar from './Component/Navbar/navbar'
import {commerce } from './lib/commerce'
import './App.css';
//import {AuthContextProvider} from './context/AuthContext'

import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import { Products,  Navbar, Cart, Checkout,Login} from './Component'



const App=()=>{
    const [products , setProducts]=useState([])
    const [cart , setCart]= useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage]=useState('')
    const fetchProduct= async ()=>{
        const{data} = await commerce.products.list()
         setProducts(data)
    }
    const fetchCart= async ()=>{
        setCart(await commerce.cart.retrieve())
    }
    const handleAddToCart= async (productId, quantity)=>{
        const {cart}= await commerce.cart.add(productId,quantity)
  setCart(cart)
    }
    console.log(cart)

const handleUpdateCartQty= async (productId,quantity)=>{
const {cart}= await commerce.cart.update(productId, {quantity})
setCart(cart)
     }
const handleRemoveFromCart= async (productId)=>{
    const {cart}= await commerce.cart.remove(productId)
    setCart(cart)
}
const handleEmptyCart= async ()=>{
    const {cart} = await commerce.cart.empty()
    setCart(cart)
}
const refreshCart= async ()=>{
    const newCart= await commerce.cart.refresh()
    setCart(newCart)
}
const handleCaptureCheckout= async (checkoutTokenId,newOrder)=>{
    try{
const incomingOrder= await commerce.checkout.capture(checkoutTokenId,newOrder)
setOrder(incomingOrder)
refreshCart()
    }catch(error){
     setErrorMessage(error.data.message)
    }
}
    useEffect(()=>{
     fetchProduct()
     fetchCart()
    },[])
    console.log(cart)
return(<>

<Router>
    <Navbar totalItem={cart?.total_items} />

<div>
    <Routes>
    <Route exact path='/' 
    element={<Products  products={products}
     onAddToCart={handleAddToCart} />}/>


    <Route exact path='/cart' 
    element={<Cart cart={cart} 
    handleUpdateCartQty={handleUpdateCartQty}
    handleRemoveFromCart={handleRemoveFromCart}
    handleEmptyCart={handleEmptyCart}
    />}/>


 <Route exact path='/checkout' element={<Checkout
  cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout}
      errorMessage={errorMessage}
  />}
 />
 <Route exact path='/signup' 
    element={<Login />} />

    </Routes>
   </div>
</Router>

</>)
}

export default App