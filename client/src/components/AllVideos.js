import React, { useEffect, useState } from 'react';
import Video from './Video';
import AddVideo from './AddVideo';
import Header from './Header';



function AllVideos() {
  const [videos, setVideos] = useState([])
  const [showAddVideo, setShowAddVideo] = useState(false)

  const baseURL = `http://localhost:4000`

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  // Add Video
  const AddNewVideo = ({ title, url }) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    const newVideo = { title, url }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newVideo)
    }

    fetch(baseURL, options)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setVideos([...videos, newVideo])
          console.log(`${newVideo.title} added successfully!`)
        } else {
          throw new Error(
            `Encountered something unexpected: ${res.status} ${res.statusText}`
          )
        }
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  }



  // Delete Video
  const deleteVideo = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    }

    fetch(`baseURL/${id}`, options)
      .then(response => {
        return response.json()
      })
      .then(data =>
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log(data)
      );
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
        <Header showAdd={showAddVideo} onAdd={() => setShowAddVideo(!showAddVideo)} />
        {showAddVideo ? <AddVideo onAdd={AddNewVideo} /> : ''}
      </div>
      {videos.map(video => {
        return (
          <>
            {videos.length > 0 ? (
              <Video key={video.id} onDelete={deleteVideo} onToggle={toggleFavourite} video={video} />
            ) : (
              'No Videos To Show'
            )}
            <br />
          </>
        )
      })
      }
    </div>
  )
}

export default AllVideos
