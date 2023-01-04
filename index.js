import  express from 'express'
import multer from 'multer'
import mysql from  'mysql2'
import bodyParser from 'body-parser'
import cors from 'cors'
import jwt from "jsonwebtoken"
import path from 'path'

import bcrypt from 'bcryptjs'
import cookieParser from 'cookie-parser'
const app = express()
app.use(bodyParser.urlencoded({extented:true}))
app.use(cors({  credentials: true, origin: "http://localhost:3000",}))
app.use(cookieParser())
app.use(multer({dest:'./image/'}).single('photo'));
app.use(express.json())

const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mansa1234",
    database:"banks",
    port: 3307
})
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to MySQL server.');
    
  });
  const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null, Date.now()+path.extname(file.originalname))
    }


  })
  const upload = multer({storage:storage})

  app.post("/upload", upload.single('image'), (req,res)=>{

  })
  // create users 
  app.post("/register",(req,res)=>{
   const q= "SELECT * FROM users WHERE username=?"
    
db.query(q,[req.body.username],async (err,data)=>{
   try{
    if(err)return res.json(err)
    if(data.length > 0)
    return res.status(409).json('user already exist')
    // hash the password
    const hash =await bcrypt.hash(req.body.password ,10)
    const quer="insert into users(username,password)values(?);"
    const values=[
        req.body.username,
        hash,
    ]
    db.query(quer,[values],(err, result)=>{
        if(err) return res.json(err)
        return res.status(200).json("user created")
     })
    }catch(err){
        console.log(err)
    }
})    
})
app.post("/image",async (req,res)=>{
     
 
     const quer="insert into images(image)values(?);"
     const values=[req.body.image]
     
     db.query(quer,[values],(err, result)=>{
         if(err) return res.json(err)
         return res.status(200).json("image inserted")
      })
     
 })
// log users in
app.post("/login",(req,res)=>{
    
  const q= "SELECT * FROM users WHERE username= ?  " 
  
db.query(q,[req.body.username], async (err,result)=>{
    if(err) return res.send(err)
    if(result.length <= 0) return res.send({message :"wrong username or password "})
    if(result.length === 0)return res.status(404).json('user not found')
    const pass = await bcrypt.compare(req.body.password, result[0].password)

    if(!pass) return  res.status(404).json('incorrect password')


 const token = jwt.sign({id: result[0].id}, "jwtkey")
 const {password, ...other}=result[0]
    res.cookie("access_token",token,{ httpOnly:false }).status(200).json(other)
    console.log(other)})
})
// log admin in 
app.post("/adminLogin",(req,res)=>{
    
    const q= " SELECT * FROM tbl_admin WHERE username= ?  " 
    
  db.query(q,[req.body.username], async (err,result)=>{
    if(err) return res.send(err) 
    if(result.length <= 0) return res.send({message :" Wrong username or Password "})

      if(result.length === 0)return res.status(404).json('user not found')
      const pass = await bcrypt.compare(req.body.password, result[0].password)
      if(!pass) return res.send( {data :"wrong username or password"}) 
    
    const token = jwt.sign({id: result[0].id}, "jwtkey")
   const {password, ...other}=result[0]
      res.cookie("access_token",token,{ httpOnly:false }).status(200).json(other)
      console.log(other)})
  })


// create admin
app.post("/create-admin",(req,res)=>{
    const q= "SELECT * FROM tbl_admin WHERE username=?"
     
 db.query(q,[req.body.username],async (err,data)=>{
    try{
     if(err)return res.json(err)
     if(data.length > 0)
     return res.status(409).json('user already exist')
     // hash the password
     const hash =await bcrypt.hash(req.body.password ,10)
     const quer="insert into tbl_admin(id,username,password)values(?);"
     const values=[
        req.body.id,
         req.body.username,
         hash,
     ]
     db.query(quer,[values],(err, result)=>{
         if(err) return res.json(err)
         return res.status(200).json("user created")
      })
     }catch(err){
         console.log(err)
     }
 })    
 })
  app.post("/logout", (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("user has been logged out")
  }  )

app.post("/create",(req,res)=>{
   
    const quer=
    "insert into employee(id,name,age,password,username)values(?)";
    const values=[
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.password,
        req.body.username,

    ]

    db.query(quer,[values],(err, result)=>{
        if(err) return res.json(err)
        return res.json("success")
     })
})

app.get("/admin", (req,res)=>{
    const q="Select * from employee;"
    db.query(q, (err,result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.get("/showImage", (req,res)=>{
    const q="Select image from images;"
    db.query(q, (err,result)=>{
        if(err) return res.json(err)
        
        return res.json(result)
    })
})
app.delete("/create/:id", (req,res)=>{
    const userId= req.params.id
    const q= "delete from employee where id =?"
    db.query(q, [userId], (err,result)=>{
        if(err) return res.json(err)
        return res.json('user deleted')
    })
})
app.put("/create/:id", (req,res)=>{
    const userId= req.params.id
    const q= "UPDATE  employee SET `id` =?,`name` =?,`age` =?,`password` =?,`username` =? where id=?";
    const values= [
        req.body.id,
         req.body.name,
         req.body.age,
         req.body.password,
         req.body.username
    ]
    db.query(q, [...values, userId], (err,result)=>{
        if(err) return res.json(err)
        return res.json('user updated')
    })
})




app.listen(8080,()=>{
    console.log("server running on port 8080...")
})