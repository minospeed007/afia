import {Link} from 'react-router-dom'
import {useState } from 'react'
import{Paper} from '@mui/material';

import Users from './Component/Users'
const Admin=()=>{
const [ showUsers, setShowUsers]= useState(false)

  
  
  const viewUsers=()=>{
    setShowUsers(showUsers=> !showUsers)
  }  
  
  return(<>
    <div className='admin-container'>
      <Paper className='sidebar'>
      <div className='sidebtn'>
      <div className='sidebtn2'>

      <button type='button'className='admin-btn2' onClick={viewUsers}>View Users</button><br/>
      <hr/>
      <Link to='/admin/add-user'>
      <button type='button'className='admin-btn2'>Register Users</button>
      </Link>
      <br/><hr/>
      <Link to='/admin/products'>
      <button type='button'className='admin-btn2'>View Products</button>
      </Link>
      <br/>

      <hr/>
      <a href='https://dashboard.chec.io/products' target="_blank" rel="noopener noreferrer">
      <button type='button'className='admin-btn2'>Add Product</button>
       </a><hr/>
       </div>
       </div>
       </Paper>
      <div className='main-section'>
      {showUsers && (<Users/>)}

      </div>

    </div>
</>)
}
export default Admin;
