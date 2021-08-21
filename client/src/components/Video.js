import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

function Video({ video, onDelete }) {
  const [rating, setRating] = useState(video.rating);
  const [deleteVideo, setDeleteVideo] = useState(video);

  const vidId = video.url.split('=').pop();

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

  const handleClick = (videoId) => {
    console.log(`Delete me ${videoId}!`);
    const deleteId = deleteVideo.some(video => video.id === videoId);
    console.log(`Delete me ${deleteId}!`);

    if (deleteId) {
      const deletedVideos = deleteVideo.filter(video => video.id !== videoId);
      setDeleteVideo(deletedVideos)
      console.log(deletedVideos)
    };
  };


  return (
    <div key={video.id} className="video">
      <h6>{video.title}</h6>
      <div className="container">
        <ReactPlayer controls url={`https://www.youtube.com/embed/${vidId}`}/>        
      </div>
      <FaThumbsUp style={{color: 'green', cursor: 'pointer'}} onClick={() => upVote(rating)} />
      <h6>{rating}</h6>
      <FaThumbsDown style={{ color: 'red', cursor: 'pointer' }} onClick={() => downVote(rating)} />
      <div>
        <button onClick={() => onDelete(video.id)}>Delete</button>
      </div>
    </div>
  )
};

export default Video;
