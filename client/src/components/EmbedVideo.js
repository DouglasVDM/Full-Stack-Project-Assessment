import React, { useState } from 'react';
import ExampleResponse from './../assets/exampleResponse.json';
import AddVideo from './AddVideo';
import Video from './Video';

const data = ExampleResponse
console.log(data)


function EmbedVideo() { 

  return (
    <div>
      <Video />
      <AddVideo />
    </div>
  )
}

export default EmbedVideo
