import React from 'react'
import './Feed.css'
import MainFeed from './MainFeed'
import MessageSender from './MessageSender'
function Feeds() {
  return (
    <div className='content__feeds'>
        <MessageSender/>
        <MainFeed/>
    </div>
  )
}

export default Feeds