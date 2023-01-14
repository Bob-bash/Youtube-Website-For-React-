import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import {Search,Home,Channel,Video,Sidebar,Header} from './components'
function App() {
    const [selected, setSelected] = useState('New');
    const [titleshow, settitleshow] = useState(false)
  return (
    <div className='div'>
        <Header titleshow={titleshow} settitleshow={settitleshow}/>
        <div className='main'>
            <Sidebar selected={selected} setSelected={setSelected}
            titleshow={titleshow} settitleshow={settitleshow}
            />
            <div className='content'>
                {titleshow&&(
                    <div className='texts'><h3>{selected}</h3><h3>Video</h3></div>
                )}
                <Routes>
                    <Route path='/' element={<Home selected={selected}/>}/>
                    <Route path='/video/:id' element={<Video />}/>
                    <Route path='/channel/:id' element={<Channel/>}/>
                    <Route path='/search/:indata' element={<Search />}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default App