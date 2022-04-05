import React from 'react'
import CreatePost from './CreatePost'
import './Feed.css'
import MainFeed from './MainFeed'
import MessageSender from './MessageSender'
function Feeds() {
  return (
    <div className='content__feeds'>
        <MessageSender/>
        <CreatePost/>
        <MainFeed/>
    </div>
  )
}

export default Feeds