import React, { useState } from 'react'
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../../Slice/userSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [userInfo , setUserInfo] = useState({
        name : " ",
        email : "",
        password :" "
    });
    const [toggle,setToggle] = useState(false)
    const [msg , setMsg] = useState("")
    
   const dispatch = useDispatch()
   const users = useSelector(getUser)
   const navigator = useNavigate()
    const handlechange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;

        setUserInfo((currInfo)=>{
            return{
                ...currInfo,
                [name]: value,
            }
        })

    } 




const handleAdd = (e)=>{
    e.preventDefault()
    dispatch(setUser({
        name:userInfo.name,
        email:userInfo.email,
        password:userInfo.password
    }))

    setUserInfo({
        name:"",
        email:"",
        password:""
    })



    
}

const login = (e)=>{
    e.preventDefault()
    const email = userInfo.email;
    const password = userInfo.password
    console.log(email,password);
  // eslint-disable-next-line array-callback-return
  users.map((user,index)=>{
    if(user.email === email && user.password === password){
        setMsg("login successfully")
        navigator("/home")
    }
  })
  setUserInfo({
    email:"",
    password:""
  })
}

  return (
    <div className='login'>
        <h1>Login Account</h1>
        {
            !toggle?(<div className='login__container'>
            
            <form>
                <h5>Name</h5>
                <input type='text' value={userInfo.name} 
                placeholder='Enter Your Name' name='name'
                onChange={handlechange} required />
                 <h5>Email</h5>
                <input type='email' value={userInfo.email} 
                placeholder='Enter Your Email' name='email'
                onChange={handlechange} required/>
                <h5>password</h5>
                <input type='text' value={userInfo.password} 
                placeholder='Enter Your password' name='password'
                onChange={handlechange}  required/>

                <button onClick={handleAdd}>Create Account</button>
            </form>
            <button onClick={(e)=>setToggle(!toggle)}>login</button>
        </div>):(
        <div className='login__container'>
            <h1>{msg}</h1>
            <form>
                 <h5>Email</h5>
                <input type='email' value={userInfo.email} 
                placeholder='Enter Your Email' name='email'
                onChange={handlechange} required/>
                <h5>password</h5>
                <input type='text' value={userInfo.password} 
                placeholder='Enter Your password' name='password'
                onChange={handlechange}  required/>

                <button onClick={login}>Login</button>
            </form>
            <button onClick={(e)=>setToggle(!toggle)}>Signup</button>
        </div>)
        }
        
        
    </div>
  )
}

export default Login