import React, {useState, useEffect} from 'react'
//import Products from './Component/Products/products'
//import Navbar from './Component/Navbar/navbar'
import {commerce } from './lib/commerce'
import './App.css';
//import {AuthContextProvider} from './context/AuthContext'
import { CssBaseline } from '@material-ui/core';
import{Input,Grid} from '@mui/material';

import {BrowserRouter as Router, Routes, Route,useLocation} from  'react-router-dom'
import { Products,Footer, Navbar, Cart, Checkout,Login,Add, Users,
Register,Update,Admin, RegisterAdmin, AdminLogin, AdminAddUser,AdminProducts, AdminProduct
} from './Component'



const App=()=>{
    const [mobileOpen, setMobileOpen] = useState(false);

    const [products , setProducts]=useState([])
    const [cart , setCart]= useState({})
    const [searchProduct, setSearchProduct]=useState([])
    const [search, setSearch]=useState('')


    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage]=useState('')
const location= useLocation();
    const fetchProduct= async ()=>{
        const{data} = await commerce.products.list()
         setProducts(data)
         console.log(data)
    }
    const fetchCart= async ()=>{
        setCart(await commerce.cart.retrieve())
    }
    const handleAddToCart= async (productId, quantity)=>{
        const {cart}= await commerce.cart.add(productId,quantity)
  setCart(cart)
    }

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
     setErrorMessage(error.data.error.message)
    }
}
    useEffect(()=>{
     fetchProduct()
     fetchCart()
    },[])
    console.log(cart)
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    useEffect(()=>{
        
        const filteredData= products?.filter((item)=>item?.name?.toLowerCase().includes(search.toLocaleLowerCase()))
        setSearchProduct(filteredData)
    
    },[products, search])
    
    console.log(searchProduct)
    

return(<>


<div>
{location.pathname==='/' && (
    <div className='search-crypto'>
        <Input className='search-input'
         placeholder='search product' 
          onChange={(e)=>setSearch(e.target.value)}/>
    </div>
)}
<div style={{ display: 'flex' }}>
<Navbar totalItems={cart?.total_items} handleDrawerToggle={handleDrawerToggle} />
     
    <CssBaseline />
<div className='parent'>
    <Routes>

    <Route exact path='/' 
    element={<Products  products={products}
    setSearch={setSearch} searchProduct={searchProduct}
     onAddToCart={handleAddToCart} />}/>

     <Route exact path='/admin/products' 
    element={<AdminProducts  products={products}
    setSearch={setSearch} searchProduct={searchProduct}
     onAddToCart={handleAddToCart} />}/>
     
     <Route exact path='/admin/dashboard' 
    element={<Admin  />}/>
    
    <Route exact path='/cart' 
    element={<Cart cart={cart} 
    handleUpdateCartQty={handleUpdateCartQty}
    handleRemoveFromCart={handleRemoveFromCart}
    handleEmptyCart={handleEmptyCart}
    />}/>


 <Route exact path='/checkout' element={<Checkout
  cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout}
      errorMessage={errorMessage} totalItems={cart?.total_items}
  />}
 />
 <Route path='/add' element={<Add/>}/>
 <Route path='/admin/add-user' element={<AdminAddUser/>}/>

  <Route path='/users' element={<Users/>}/>
  <Route path='/admin/register' element={<RegisterAdmin/>}/>
  <Route path='/admin/login' element={<AdminLogin/>}/>

 <Route path='/register' element={<Register/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/update/:id' element={<Update/>}/>


 </Routes>
   </div>
   </div>
   <Footer/>
</div>

</>)
}

export default App