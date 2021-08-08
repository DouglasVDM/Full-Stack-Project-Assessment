import React, { useState } from 'react';
import validator from 'validator';
import { uuid } from 'uuidv4';

function AddVideo() {
  const [errorMessage, setErrorMessage] = useState('');
  const [ title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [videos, setVideos] = useState([]);

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL')
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }

  // Getting the Input Value, adding it to state
  const handleSubmit = (event) => {
    event.preventDefault();    
    if (title && url) {
      const video = {
        id: uuid(),
        title,
        url,
        rating: 0
      };
      setVideos((videos) => {
        return [...videos, video];
      });
      setTitle('');
      setUrl('');
    } else {
      console.log(`Enter title and url`);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>          
        <input
          type="text"
          id="title"
          name="title"
          value={title}          
          placeholder="Add your Video Title"          
          onChange={(event) => setTitle(event.target.value)}
          />
      </div>
      <br />
        <label htmlFor="url">URL: </label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          placeholder="Add the Video URL"
          onChange={(event) => {
          validate(event.target.value)
          setUrl(event.target.value)
          }}>          
        </input>
        <br />
        <span style={{ fontWeight: 'bold', color: 'red', }}>
          {errorMessage}
        </span>
        <br />
      <button type="submit">Add Video</button>
      </form>
      {/* New Viedos added printing to the screen */}
      {
        videos.map((video) => {
          const { id, title, url, rating } = video;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <p>{url}</p>
              <p>{rating}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default AddVideo;
