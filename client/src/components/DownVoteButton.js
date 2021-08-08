import React from 'react'

function DownVoteButton({votes, setVotes, downVote}) {
  return (
    <div>
      <button onClick={downVote(setVotes, votes)}>
        Down Vote
      </button>
    </div>
  )
};

export default DownVoteButton;
