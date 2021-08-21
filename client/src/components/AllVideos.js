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
            <Video videoRating={video.rating} videoUrl={video.url} videoTitle={video.title} videoId={video.id} videos={videos} />
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
