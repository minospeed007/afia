import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography, Menu, MenuItem } from '@mui/material';
import { ShoppingCart , } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assests/commerce.png';
import './styles.css';
import { useSearch } from '../../context/searchContext';
import { AuthContext } from '../../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const { setSearch } = useSearch();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  }

  const adminLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
    window.location.reload();
  }

  const location = useLocation();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar sx={{
  bgcolor: "black",
  paddingY: 4,
  
}}

 >
        <Toolbar>

          <Typography component={Link} to='/' variant='h6' className='title'>
            <img src={logo} alt='commerce.js' className='image' />
            <Link  to="/">

           <h2 className='afia'> Afia</h2> 
           </Link>
            </Typography>

            <div className='appbar'>

          {location.pathname === '/' && (
            <div className='search-cryptos'>
              <input
                className='search-inputs'
                placeholder='Search Product'
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className='search-icon-div'>
                <SearchIcon className='search-icon' style={{ fontSize: '2.5rem' }} />
                </div>
            </div>
          )}



          {location.pathname === '/admin/dashboard' && (
            <div className='logino'>
              <div className='login1o'>
                {currentUser ? (
                  <p onClick={adminLogout} className='p-log'>
                    {currentUser?.username} | Logout
                  </p>
                ) : null}
              </div>
            </div>
          )}

          {location.pathname === '/' && (
            <div className='log-divs'>
              <div className='log-div'>
                {currentUser ? (
                  <p onClick={logout} className='p-log'>
                    {currentUser?.username} | Logout
                  </p>
                ) : (
                  <Link to='/login' className='login-title'>
                    <p className='login-title'>Login</p>
                  </Link>
                )}
                {!currentUser && (
                  <Link to='/register' className='login-title'>
                    <p className='login-title'>Register</p>
                  </Link>
                )}
              </div>

              <div className='shopping-cart'>
                <IconButton component={Link} to='/cart' aria-label='show cart item' color='inherit'>
                  <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
            </div>
            </div>

          )}
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
}

export default Navbar;