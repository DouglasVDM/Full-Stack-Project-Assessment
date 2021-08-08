import React from 'react'

function UpVoteButton({ votes, setVotes, upVote }) {
  return (
    <div>
      <button onClick={upVote(setVotes, votes)}>
        Up Vote
      </button>
    </div>
  )
};

export default UpVoteButton;
