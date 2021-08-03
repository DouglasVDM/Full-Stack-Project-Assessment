import React, { useState } from 'react';
import {exampleresponse} from './../../../exampleresponse.json'


function EmbedVideo() {
  const [votes, setVotes] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  
  const data = exampleresponse
  console.log(data)
  
  // Delete a Video
  const deleteVideo = () => {
    console.log(`Add logic to delete video`);
  };

  // Add a Video
  const addVideo = () => {
    console.log(`Add logic for adding video`);
  };

  // Getting the Input Value
  const handleInput = () => {
    if (title.length !== 0 && url.length !== 0) {
      console.log(`Got this: ${title}`);
      console.log(`Got this: ${url}`);
    }
  }

  // 

  return (
    <div>
      <h2>Title of video</h2>

      <button onClick={() => setVotes(votes + 1)}>Up Vote</button>
      <button onClick={() => setVotes(votes - 1)}>Down Vote</button>
      <p>{votes}</p>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VjXzWrgHSWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <button onClick={deleteVideo}>Delete</button>            
      <br />
      <br />
      <label for='title' >Title</label>
      <br />
      <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter title' type='text' id='title' name='title' />
      <br />
      <label for='title' >URL</label>
      <br />
      <input value={url} onChange={(e) => { setUrl(e.target.value) }}  placeholder='enter url' type='text' id='url' name='url' />
      <br />
      <button onClick={handleInput}>Add Video</button>
    </div>
  )
}

export default EmbedVideo
