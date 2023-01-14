import React from 'react'
import './sidebar.css'
import {variants} from '../assets/constants'
import {Link} from 'react-router-dom'
function Sidebar({selected,setSelected,titleshow,settitleshow}) {
  return (
    <div className='sidebar'>
      {variants.map((item,i)=>(
        <Link 
          to='/'
          key={item.name}
          style={{backgroundColor:item.name===selected?'red':''}}
          className='link'
          onClick={()=>{
            setSelected(item.name)
            settitleshow(true)
          }}
        ><span className='icon'
        style={{color:item.name==selected?'white':''}}
        >{item.icon}</span><span className='color' style={{fontWeight:item.name===selected?'bold':''}}>{item.name}</span></Link>
      ))}
    </div>
  )
}

export default Sidebar