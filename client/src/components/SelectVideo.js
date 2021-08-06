import React from 'react'
import Video from './Video';

function SelectVideo({ state }) {
  const allVideos = state;

  const sortedVideos = allVideos.sort((video1, video2) => {
    let title1 = video1.title.toUpperCase();
    let title2 = video2.title.toUpperCase();
    if (title1 < title2) {
      return -1;
    } else if (title1 > title2) {
      return 1;
    }
    return 0;
  })
  
  return (
    <div>
      <p>Found {sortedVideos.length} videos.</p>
        <select className="custom-select">
          <option selected>Choose your video</option>
        {sortedVideos.map(video => {
          return (
            <>
              <option key={video.id} value={video.id}>{video.title}</option>
            </>
          )}
      )}
      </select>
      <Video state={state} />

    </div>
  )
}

export default SelectVideo
