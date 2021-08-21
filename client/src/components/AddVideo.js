import React, { useState } from 'react';
import validator from 'validator';

function AddVideo({ videos }) {
  // let Videos = { videos };
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [newVideos, setNewVideos] = useState([...videos]);
  console.log(newVideos)

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL')
      setErrorMessage('')
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }

  // Getting the Input Value, adding it to state
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, url);
    
    const newVideo = {
      title,
      url,
      rating: 0
    }

    if (title && url) {    
      // setNewVideos(newVideos.concat(newVideo))
      setNewVideos((videos) => {
        return [...videos, newVideo]
      });
      setTitle('');
      setUrl('');
    } else {
      return alert(`Enter title and url`);
    }
  }

  return (
    <div>
      <form className="form" onSubmitCapture onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>          
        <input
          type="text"
          id="title"
          name="title"
          value={title}          
          placeholder="Add your Video Title"          
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
      </div>
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
        <br />
      New Videos added printing to the screen
      {
        videos.map((video) => {
          const { id, title, url, rating } = video;
          return (
            <div style={{ border:'.1rem solid blue' }} key={id}>
              <h6>Title: {title}</h6>
              <p>Url: {url}</p>
              <p>Rating: {rating}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default AddVideo;
