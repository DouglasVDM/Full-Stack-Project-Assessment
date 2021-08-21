import React, { useState } from 'react'
import ReactPlayer from 'react-player';

function Video({ videoId, videoRating, videoUrl, videoTitle, videos }) {
  const [rating, setRating] = useState(videoRating);
  const [deleteVideo, setDeleteVideo] = useState(videos);

  const vidId = videoUrl.split('=').pop();

  const upVote = (video) => {
    if (video === videoRating) {
      setRating((video) => {
        return video + 1
      })
    } else if (video === videoRating + 1) {
      setRating((video))
    } else {
      return
    }
  };

  const downVote = (video) => {
    console.log(video);
    if (video === videoRating + 1) {
      setRating((video) => {
        return video - 1
      })
    } else if (video === videoRating - 1) {
      setRating((video))
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
    <div key={videoId} className="video">
      <h6>{videoTitle}</h6>
      <div className="container">
        <ReactPlayer controls url={`https://www.youtube.com/embed/${vidId}`}/>        
      </div>
      <button onClick={() => upVote(rating)}>Up Vote</button>
      <h6>{rating}</h6>
      <button onClick={() => downVote(rating)}>Down Vote</button>
      <div>
        <button onClick={() => handleClick(videoId)}>Delete</button>
      </div>
    </div>
  )
};

export default Video;
