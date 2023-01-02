import React from 'react'
import {Link} from 'react-router-dom'


const Footer=()=>{
return(<>
<div className="footer-main">
    <div className="footer" >
    
    <div className="footery"> 
    <Link className='foot' to='/'>Home</Link><br/>
    <Link className='foot' to='/cart'>Cart</Link>

    </div>
    
    </div>
    </div>
</>)
}
export default Footer