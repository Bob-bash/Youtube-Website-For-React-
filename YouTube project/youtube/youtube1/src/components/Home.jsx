import React from 'react'
import './home.css'
import {BiCheckboxChecked} from 'react-icons/bi'
import { useEffect,useState } from 'react'
import {fetchdata} from '../assets/fetchdata'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
function Home({selected}) {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchdata(`search?part=snippet&q=${selected}`)
    .then(data=>{setvideos(data.items)})
  }, [selected]);
  console.log(videos);
  return (
    <div className="screen">
      <div className='div1'>
        {videos.map(item=>(
          <div className="divw" key={item.id.videoId}>
            <Link to={`video/${item?.id?.videoId}`}>
              <img className='img' src={item?.snippet?.thumbnails?.high?.url} alt="" />
            </Link>
            <div className="texts1">
              <Link 
              className='des'
              to={`video/${item?.id?.videoId}`}
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
  )
}

export default Home