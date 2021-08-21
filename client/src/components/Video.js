import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

function Video({ video, onDelete, onToggle }) {
  const [rating, setRating] = useState(video.rating);


  const videoId = video.url.split('=').pop();

  const upVote = (currentRating) => {
    if (currentRating === video.rating) {
      setRating((video) => {
        return video + 1
      })
    } else if (currentRating === video.rating + 1) {
      setRating(currentRating)
    } else {
      return
    }
  };

  const downVote = (videoX) => {
    console.log(videoX);
    if (videoX === video.rating + 1) {
      setRating((video) => {
        return video - 1
      })
    } else if (videoX === video.rating - 1) {
      setRating(videoX)
    } else {
      return
    }
  };

// Toggle Div Favourite Class - Color
// className = {`video ${video.favourite ? 'favourite' : ''}`}

  return (
    <div key={video.id} className="video" onDoubleClick={() => onToggle(video.id)}>
      <h6>{video.title}</h6>
      <div className="container">
        <ReactPlayer controls url={`https://www.youtube.com/embed/${videoId}`} />
      </div>
      <FaThumbsUp style={{ color: 'green', cursor: 'pointer' }} onClick={() => upVote(rating)} />
      <h6>{rating}</h6>
      <FaThumbsDown style={{ color: 'red', cursor: 'pointer' }} onClick={() => downVote(rating)} />
      <div>
        <button onClick={() => onDelete(video.id)}>
          Delete
        </button>
      </div>
    </div>
  )
};

export default Video;
