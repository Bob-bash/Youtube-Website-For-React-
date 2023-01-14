import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import {fetchdata} from '../assets/fetchdata'
import { Link } from 'react-router-dom'
import {BiCheckboxChecked} from 'react-icons/bi'
function Search() {
  const clickcount=useSelector(state=>state.clickcount)
  const indata=useSelector(state=>state.indata)
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchdata(`search?part=snippet&q=${indata}`)
    .then(data=>{setvideos(data.items)})
  }, [clickcount]);
  return (
    <div>
      <h2>Results for <span style={{color:'red'}}>{indata}</span>!</h2>
      <div className="screen" style={{height:'82vh'}}>
        <div className='div1'>
          {videos.map(item=>(
            <div className="divw" key={item.id.videoId}>
              <Link to={`/video/${item?.id?.videoId}`}
              >
                <img className='img' src={item?.snippet?.thumbnails?.high?.url} alt="" />
              </Link>
              <div className="texts1">
                <Link 
                className='des'
                to={`/video/${item?.id?.videoId}`}
                >{item?.snippet?.description}</Link>
                <Link 
                className="titlew"
                to={`/channel/${item?.snippet?.channelId}`}
                >
                  <span className='title'>{item?.snippet?.channelTitle}</span>
                  <BiCheckboxChecked  className='icon1'/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search