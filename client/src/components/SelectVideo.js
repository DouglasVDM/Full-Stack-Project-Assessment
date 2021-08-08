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
       <select onClick={clickHandler} className="custom-select">
         <option value='0' >Choose a video</option>
         {allVideos.map(video => {
          return (
            <>
              <option value={video.url} id={video.id} key={video.id}>
                {video.title}
              </option>
            </>
           )
         })}
      </select>
       {url ? <Video url={url} state={state} /> : null}
    </div>
  )
}

export default SelectVideo
