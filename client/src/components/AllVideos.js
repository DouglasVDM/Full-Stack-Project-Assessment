import React, { useEffect, useState } from 'react';
import Video from './Video';
import AddVideo from './AddVideo';

function AllVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, []);

  // Delete Video
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id))
  }

  // Favourite Video
  const toggleFavourite = (id) => {
    console.log(id)
    // setVideos(
    //   videos.map((video) =>
    //     video.id === id ? { ...video, favourite: !video.favourite } : video
    //   )
    // )
  }

  return (
    <div>
      <div>
        <AddVideo videos={videos} />
      </div>
      {videos.map(video => {
        return (
          <>
            {videos.length > 0 ? (
              <Video onDelete={deleteVideo} onToggle={toggleFavourite} video={video} />
            ) : (
              'No Videos To Show'
            )}
            <delete />
            <br />
          </>
        )
      })
      }
    </div>
  )
}

export default AllVideos
