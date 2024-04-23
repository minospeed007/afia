import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
const Users=()=>{
const [users, setUsers]=useState([])
  useEffect(()=>{
    const fetchUser= async ()=>{
try{
  const res= await axios.get("http://localhost:8080/admin")
  setUsers(res)

    console.log(res)

  
}catch(err){
  console.log(err)
}
    }

    fetchUser()
  },[])
  const handleDelete= async (id)=>{
    try{
await axios.delete("http://localhost:8080/create/ "+ id)
window.location.reload()
    }catch(err){
        console.log(err)
    }
}
return(<>
<div className='user-div'>

<div className='column'>
<div className='cole-div' >
        <div className="coletd" >
        <div className="coler" >
        <h6 >ID</h6>
</div>
           </div>

           <div className="coletd" >
        <div className="colers" >
        <h6 >Name</h6>
        </div>
        </div>
        <div className="coletd" >
        <div className="colerd" >
        <h6 >Age</h6>
        </div>
        </div>
        <div className="coletd" >
        <div className="username" >
        <h6 >Username</h6>
        </div>
        </div>
      <div className="coletd" >
      <h6 className="coles">Password</h6>

      </div>
</div>

  </div >
    {users?.data?.map((user)=>{
     return(
      <>
    
  
 <div className='contentcard'>
 <div className='p-divr'>
 
 <div className='product-delete'>
 <p className='delete' onClick={()=>handleDelete(user.id)}>Delete 
 </p> 

    <p className='delete' >
<Link to={`/update/${user.id}`} className='delete-2' >Update
</Link>
</p> 
</div>     
  <hr/>
      <div className='product-pr'>    
      {user.id} 

            </div>
        <div className='product-pr'>
            {user.name}
          </div>
        <div className='product-pr'>
            {user.age}
          </div>
          <div className='product-pr'>
            {user.username}
          </div>
          <div className='product-pr'>
            {user.password}
          </div>
          
      </div>
      </div>
     
    
    </>
     )
    })}
   </div>       
</>)


}
export default Users;