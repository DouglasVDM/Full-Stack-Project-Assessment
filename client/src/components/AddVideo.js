import React, {useState} from 'react'

function AddVideo() {
  const [ title, setTitle] = useState('');
  const [ url, setUrl] = useState('');

  // Add a Video
  const addVideo = () => {    
  };
  
  // Getting the Input Value
  const handleInput = () => {
    if (title.length !== 0 && url.length !== 0) {
      console.log(`Got this: ${title}`);
      console.log(`Got this: ${url}`);
      console.log(`Add logic for adding video`);
    }
  }

  return (
    <div>     
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder="Add your Video Title"
            value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
      </label>
      <br/>      
        <label>
          Url
          <input
            type="text"
            name="title"
            placeholder="Add the Video URL"
            value={url}
          onChange={(e) => setUrl(e.target.value)}
          />
      </label>
      <br />      
      <button onClick={handleInput}>Add Video</button>
    </div>
  )
}

export default AddVideo
