import React, { useEffect, useState } from 'react';
import Video from './Video';
import AddVideo from './AddVideo';
import Header from './Header';

function AllVideos() {
  const [videos, setVideos] = useState([])
  const [showAddVideo, setShowAddVideo] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, []);

  // Add Video
  const AddNewVideo = (video) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newVideo = { id, ...video }
    setVideos([...videos, newVideo])
  }

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
        <Header onAdd={() => setShowAddVideo(!showAddVideo)} />
        {showAddVideo ? <AddVideo onAdd={AddNewVideo} /> : ''}
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
