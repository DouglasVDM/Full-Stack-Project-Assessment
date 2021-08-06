import React, { useState } from 'react';
import ExampleResponse from './../assets/exampleResponse.json';
import AddVideo from './AddVideo';
import SelectVideo from './SelectVideo';


function EmbedVideo() {
  const data = ExampleResponse;

  const [state, setState] = useState(data)
  
  return (
    <div>
      <SelectVideo state={state}/>
      <AddVideo />
    </div>
  )
}

export default EmbedVideo
