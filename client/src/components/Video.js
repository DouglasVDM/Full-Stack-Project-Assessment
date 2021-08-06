import React, {useState} from 'react'
import DeleteButton from './DeleteButton';

function Video({ state }) {
  console.log(state);
  const [votes, setVotes] = useState(0);

  // Delete a Video
  const deleteVideo = () => {
    console.log(`Add logic to delete video`);
  };

  const upVote = (setVotes, votes) => {
    return () => setVotes(votes + 1);
  }

  const downVote = (setVotes, votes) => {
    return () => setVotes(votes - 1);
  }
  
  return (
    <div>
      <h2>Title: .title</h2>
      <h3>Rating: .rating</h3>
      
      <button onClick={upVote(setVotes, votes)}>
        Up Vote
      </button>
      
      <button onClick={downVote(setVotes, votes)}>
        Down Vote
      </button>

      <p>{votes}</p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/VjXzWrgHSWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <DeleteButton deleteVideo={deleteVideo} />      
    </div>
  )
}

export default Video


