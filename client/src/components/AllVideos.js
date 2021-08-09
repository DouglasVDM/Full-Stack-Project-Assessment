import React, { useEffect, useState } from 'react';
import SelectVideo from './SelectVideo';

function EmbedVideo() {  
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data)
      });
  }, [])

  
  return (
    <div>
      <SelectVideo state={state} />
      <br />
    </div>
  )
}

export default EmbedVideo
