import React, { useState } from 'react';
import ExampleResponse from './../assets/exampleResponse.json';
import AddVideo from './AddVideo';
import Video from './Video';


function EmbedVideo() {
  const data = ExampleResponse;

  const [state, setState] = useState(data)
  
  return (
    <div>
      <Video state={state}/>
      <AddVideo />
    </div>
  )
}

export default EmbedVideo
