import React, { useEffect, useState } from 'react';
import Video from './Video';
import AddVideo from './AddVideo';

function EmbedVideo() {  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, []);
  
  return (
    <div>
      <div>
        <AddVideo videos={videos} />
      </div>
      {videos.map(video => {
        return (
          <>
            <Video video={video} />
            <delete />
          <br />
          </>
        )
      })
    }
    </div>
  )
}

export default EmbedVideo
