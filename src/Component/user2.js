import {useState,useEffect} from 'react'
import axios from 'axios'
import {Grid} from  '@mui/material'
const Users=()=>{
const [users, setUsers]=useState([])
  useEffect(()=>{
    const fetchUser= async ()=>{
try{
  const res= await axios.get("http://localhost:8080/users")
  setUsers(res)

    console.log(res)

  
}catch(err){
  console.log(err)
}
    }

    fetchUser()
  },[])

return(<>
<div className='user-div'>

<div className='column'>
    
      <h6 className="cole">ID</h6>
      <h6 className="cole">Name</h6>
      <h6 className="cole">Age</h6>
      <h6 className="cole">Username</h6>
      <h6 className="cole">Password</h6>

    
  </div >
    {users?.data?.map((user)=>{
     return(
      <>
    
  
 <div className='contentcard'>
 <div className='p-divr'>
 <p className='product-pr'>
            {user.id}
        </p>
        <hr/>
        <p className='product-pr'>
            {user.name}
          </p>
        <p className='product-pr'>
            {user.age}
          </p>
          <p className='product-pr'>
            {user.username}
          </p>
          <p className='product-pr'>
            {user.password}
          </p>
          
      </div>
      </div>
     
    
    </>
     )
    })}
   </div>       
</>)


}
export default Users;