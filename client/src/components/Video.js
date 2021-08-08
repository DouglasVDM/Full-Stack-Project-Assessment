import React, {useState} from 'react'
import DeleteButton from './DeleteButton';
import DownVoteButton from './DownVoteButton';
import UpVoteButton from './UpVoteButton';

function Video({ url, state }) {
  const allVideos = state;
  const [votes, setVotes] = useState(0);

  // Extracting the Video Id from the URL
  const videoId = url.split('=').pop();

  const filteredVideo = allVideos.filter(video => video.url === url);

  // Delete a Video
  const deleteVideo = (url) => {
    console.log(`Add logic to delete video`);
    allVideos.filter(video => video.url !== url);
    
  };

  const upVote = (setVotes, votes) => {
    return () => setVotes(votes + 1);
  }

  const downVote = (setVotes, votes) => {
    return () => setVotes(votes - 1);
  }
  
  return (
    <div>
      {filteredVideo.map(video => {
        return (
          <>
            <h2>Title: {video.title}</h2>
            <h3>Rating: {video.rating}</h3>
            <UpVoteButton votes={votes} setVotes={setVotes} upVote={upVote} />
            <DownVoteButton votes={votes} setVotes={setVotes} downVote={downVote} />      
            <p>{votes}</p>
          </>
        )
      })}

      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <DeleteButton deleteVideo={deleteVideo} />      
    </div>
  )
};

export default Video;


