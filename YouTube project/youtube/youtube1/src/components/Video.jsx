import React from 'react'
import './video.css'
import  ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import {BiCheckboxChecked} from 'react-icons/bi'
import { useEffect,useState } from 'react'
import {fetchdata} from '../assets/fetchdata'
import { Link } from 'react-router-dom'
function Video() {
  const {id}=useParams()
  const [video, setvideo] = useState({});
  const [videos, setvideos] = useState([]);
  const handleclick=()=>{
    window.scrollTo({top:0,left:0,behavior:'instant'})
  }
  useEffect(() => {
    fetchdata(`videos?part=snippet,statistics&id=${id}`)
    .then(data=>{setvideo(data.items[0])})
    fetchdata(`search?part=snippet&q=${id}`)
    .then(data=>{setvideos(data.items)})
  }, [id]);


  return (
    <div className='player'>
      <ReactPlayer 
      url={`https://www.youtube.com/watch?v=${id}`}
      controls
      width='100%'
      height='55vh'
      />
      <div className="player__texts">
        <h3 className='player__t'>{video?.snippet?.title}</h3>
        <div className="player__nums">
          <div className="left common">
            {video?.snippet?.channelTitle}
            <BiCheckboxChecked  className='icon1'/>
          </div>
          <div className="right">
            <span className='view common'>{parseInt(video?.statistics?.viewCount).toLocaleString() } views</span>
            <span className='like common'>{parseInt(video?.statistics?.likeCount).toLocaleString()} likes</span>
          </div>
        </div>
      </div>
      <h2 className='h2'>Related videos for you!</h2>
      <div className="screen screen1">
        <div className='div1 videodet'>
          {videos.map(item=>(
            <div className="divw" key={item.id.videoId}>
              <Link 
              to={`/video/${item?.id?.videoId}`}
              onClick={handleclick}
              >
                <img className='img' src={item?.snippet?.thumbnails?.high?.url} alt="" />
              </Link>
              <div className="texts1">
                <Link 
                className='des'
                to={`/video/${item?.id?.videoId}`}
                onClick={handleclick}
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

export default Video