import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import './App.css';
import { SearchProvider } from './context/searchContext';
import {  Routes, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout, Login, Add,Footer,
   Users, Register, Update, Admin, RegisterAdmin, AdminLogin, 
   AdminAddUser, AdminProducts,  } from './Component';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProduct = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  useEffect(() => {
    const filteredData = products?.filter((item) => item?.name?.toLowerCase().includes(search.toLocaleLowerCase()));
    setSearchProducts(filteredData);
  }, [products, search]);

  const fetchCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.error('Error emptying cart:', error);
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      console.error('Error refreshing cart:', error);
    }
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <SearchProvider>
    <div className='root-div'>
      
      <div style={{ display: 'flex' }}>
        <Navbar totalItems={cart?.total_items} handleDrawerToggle={handleDrawerToggle} />
        <div className='parent'>
          <Routes>
            <Route exact path='/' element={<Products searchProducts={searchProducts} onAddToCart={handleAddToCart} />} />
            <Route exact path='/admin/products' element={<AdminProducts products={products} setSearch={setSearch} searchProduct={searchProducts} onAddToCart={handleAddToCart} />} />
            <Route exact path='/admin/dashboard' element={<Admin />} />
            <Route exact path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
            <Route exact path='/checkout' element={<Checkout cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout} errorMessage={errorMessage} totalItems={cart?.total_items} />} />
            <Route path='/add' element={<Add />} />
            <Route path='/admin/add-user' element={<AdminAddUser />} />
            <Route path='/users' element={<Users />} />
            <Route path='/admin/register' element={<RegisterAdmin />} />
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/update/:id' element={<Update />} />
          </Routes>
        </div>

      </div>
       <Footer/>
    </div>

    </SearchProvider>
  );
};

export default App;
