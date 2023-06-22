import React from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logOut } from '../../Slice/userSlice'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const userData = useSelector(getUser)
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const handlechange =(e,id)=>{
    dispatch(logOut(id))
    navigator("/")
  }
  return (
    <>
    <div className='home'>
      <h1>home page</h1>
      <div className=''>
      {
        userData.map((data,index)=>{
          return(
            <div className='home__userdetails' key={index}>
              <h5>{data.name}</h5>
                <span>{data.email}</span>
                <button onClick={e=>handlechange(e,data.email)}>LogOut</button>
            </div>
          )
        })
      }
      </div>
      
    </div>
    </>
  )
}

export default Home