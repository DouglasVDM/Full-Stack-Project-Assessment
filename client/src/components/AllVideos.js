import React, { useEffect, useState } from 'react';
import Video from './Video';
import AddVideo from './AddVideo';

function EmbedVideo() {  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, [])

  
  return (
    <div>
      <Video videos={videos} />
      <br />
      <AddVideo videos={videos} />
      <br />
    </div>
  )
}

export default EmbedVideo
