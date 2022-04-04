import React from 'react'
import Story from './Story'
import Feeds from './Feeds'
import './Content.css'

function Content() {
  return (
    <div className='content__wrap'>
        <Story/>
        <Feeds/>
    </div>
  )
}

export default Content