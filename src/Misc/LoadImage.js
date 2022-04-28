// this component aim to push image to firebase-storage
// in the first time this website run (after that this component should be comment
// or destroy the connection with component tree)

import React from 'react'

function LoadImage() {
  return (
    <div className="loadImage">
        <div className="loadImage__notice">
            <p>This is the first time this website run in new Firebase Project, please select </p>
        </div>
    </div>
  )
}

export default LoadImage