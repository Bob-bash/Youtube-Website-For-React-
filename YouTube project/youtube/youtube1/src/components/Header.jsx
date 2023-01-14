import React,{useState,useEffect} from 'react'
import './header.css'
import {TfiYoutube} from 'react-icons/tfi'
import {BiSearchAlt} from 'react-icons/bi'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
function Header({titleshow,settitleshow}) {
  const indata=useSelector(state=>state.indata)
  const clickcount=useSelector(state=>state.clickcount)
  const dispatch= useDispatch()
  // const handlechange=(e)=> setIndata(e.target.value)
  const handlechange=(e)=> dispatch({type:"INDATA",payload:e.target.value})
  const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(indata){
      navigate(`/search/${indata}`)
      settitleshow(false)
      dispatch({type:"CLICKCOUNT"})
      dispatch({type:"INDATA",payload:''})
      // setIndata('')
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <TfiYoutube className='logo'/>
      </Link>
      <div className="searchw">
        <input 
        type="text" 
        placeholder='Search...' 
        className='searchin'
        value={indata}
        onChange= {handlechange}
        />
        <BiSearchAlt className='searchicon' 
        onClick={handlesubmit}
        style={{cursor:'pointer'}}
        />
      </div>
    </div>
  )
}

export default Header