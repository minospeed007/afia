import React,{useState,useContext} from'react'
import { AppBar,Toolbar,IconButton,Button, Badge, Typography,Menu,MenuItem } from '@mui/material'
import {ShoppingCart } from '@mui/icons-material'
import logo from '../../assests/commerce.png'
import useStyles from './styles'
import { AuthContext } from '../../context/AuthContext';
import {Link,useLocation,useNavigate} from 'react-router-dom'

const Navbar=({ totalItems })=>{
const {currentUser}= useContext(AuthContext)
console.log(currentUser)
const navigate=useNavigate()
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
const logout=()=>{
  localStorage.clear();
 navigate("/login")
window.location.reload()
 }
 const adminLogout=()=>{
  localStorage.clear();
 navigate("/admin/login")
 window.location.reload()
 }
const classes= useStyles();
const location =useLocation();
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
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

    return(
        <>
        <AppBar  classes={classes.appbar} color='inherit'>
          <Toolbar>
         <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='commerce.js' height='25px' className={classes.image}/>
                Afia 
                </Typography>
                { location.pathname==='/admin/dashboard' && (
                  <div className='login'>
                    <div className='login1'>
                    {currentUser ? <p onClick={adminLogout} className='p-log'>
                             {currentUser?.username}  | Logout</p> : null }
                    </div>
                  </div>

                )}
                {location.pathname==='/' && (
                  <div className='login'>
                  
                  <div className='login1'>
                 
{currentUser ? <p onClick={logout} className='p-log'>
 {currentUser?.username}  | Logout
</p> : <Link to='/login' className='login-title'> 
<p  className='login-title'>Login</p></Link>

}
              {!currentUser && (
                <Link to='/register' className='login-title'>
                <p className='login-title'>Register</p>
                 </Link>
              )}

              
              </div>
              {location.pathname==='/' && (
                <div className={classes.button}>
    <IconButton component={Link} to='/cart' aria-label='show cart item' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
               <ShoppingCart />
               
                </Badge>
                </IconButton>
                </div>
                )}
              </div>
                )}
               
                
                <div className={classes.grow}/>
                
            </Toolbar>
        </AppBar>
        {renderMobileMenu}

        </>
    )

}

export default Navbar