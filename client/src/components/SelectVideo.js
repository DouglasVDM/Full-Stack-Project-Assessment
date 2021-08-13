import React, { useState } from 'react'
import Video from './Video';

function SelectVideo({ state }) {
  const allVideos = state;
  const [url, setUrl] = useState(null);

  const clickHandler = (event) => {
    const result = event.target.value;
    return setUrl(result);
  };  

  return (   
    <div>
       <p>Found {allVideos.length} videos. Choose one.</p>
      {url ? <Video url={url} state={state} /> : null}

      {/* Displaying all the Videos */}
      {allVideos.map(video => {
        const videoId = video.url.split('=').pop();
        return (
          <>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>
        )
      })
      }
    </div>
  )
}

export default SelectVideo
