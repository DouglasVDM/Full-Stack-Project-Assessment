import React, { useState } from 'react'
import DownVoteButton from './DownVoteButton';
import UpVoteButton from './UpVoteButton';

function SelectVideo({videoId, videoRating, videoUrl, videoTitle }) {
  // const allVideos = videos;
  let [rating, setRating] = useState(videoRating);
  
  // const filteredVideo = allVideos.filter(video => video.url === url);

  const vidId = videoUrl.split('=').pop();

  const upVote = (video) => {
    console.log(video);
    if (video === videoRating) {
      setRating((video) => {
        return video + 1
      })
    } else if (video === videoRating + 1){
      setRating((video))
    } else {
      return
    }
  };

  const downVote = (video) => {
    console.log(video);
    if (video === videoRating +1) {
      setRating((video) => {
        return video - 1
      })
    } else if (video === videoRating - 1){
      setRating((video))
    } else {
      return
    }
  };

  const deleteVideo = () => {
    console.log(`Delete me!`);
  };


  return (         
    <div key={videoId} className="videos" style={
      {
        background: "lightgreen",
        border: ".1rem solid blue",
        margin: ".3rem"              
      }}>
      <h6>Title: {videoTitle}</h6>
      <br />
      <div className="container">
        <iframe className="responsive-iframe" width="560" height="315" src={`https://www.youtube.com/embed/${vidId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <button onClick={() => upVote(rating)}>Up Vote</button>
      <h6>Rating: {rating}</h6>
      <button onClick={() => downVote(rating)}>Down Vote</button>
      <br />
      <div>
        <button onClick={deleteVideo}>Delete</button>
      </div>
    </div>       
  )
}

export default SelectVideo;
