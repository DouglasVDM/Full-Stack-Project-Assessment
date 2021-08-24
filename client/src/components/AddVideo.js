import React, { useState } from 'react';
import validator from 'validator';


function AddVideo({ onAdd }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL')
      setErrorMessage('')
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }

  // Getting the Input Value, adding it to state
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(title, url);

    if (!title && !url) {
      alert('Please Add Title and Url')
      return
    }
    onAdd({ title, url })
    setTitle('')
    setUrl('')
  }

  return (
    <div>
      <form className="form" onSubmitCapture onSubmit={onSubmit}>
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
    </div>
  )
}

export default AddVideo;
