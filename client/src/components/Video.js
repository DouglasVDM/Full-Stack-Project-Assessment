import React, { useState } from 'react'
import DownVoteButton from './DownVoteButton';
import UpVoteButton from './UpVoteButton';

function SelectVideo({ videos }) {
  const allVideos = videos;
  const [url, setUrl] = useState(null);
  const [rating, setRating] = useState(0);
  
  const filteredVideo = allVideos.filter(video => video.url === url);

  const upVote = (setRating, rating) => {
    return () => setRating(rating + 1);
  }

  const downVote = (setRating, rating) => {
    return () => setRating(rating - 1);
  }


  const clickHandler = (event) => {
    const result = event.target.value;
    return setUrl(result);
  };  

  return (   
    <div>
       <p>Found {allVideos.length} videos. Choose one.</p>
      {/* Displaying all the Videos */}
      {allVideos.map(video => {
        const videoId = video.url.split('=').pop();
        return (
          <div style={{background: 'lightgreen'}}>
            <br />
            <h6>Title: {video.title}</h6>
            <h6>Rating: {video.rating}</h6>
            <UpVoteButton rating={video.rating} setRating={setRating} upVote={upVote} />
            <DownVoteButton rating={rating} setRating={setRating} downVote={downVote} />
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br />
          </div>
        )
      })
      }
    </div>
  )
}

export default SelectVideo
