import React from 'react'

function DeleteButton({deleteVideo}) {
  return (
    <div>
      <button onClick={deleteVideo}>Delete</button>
    </div>
  )
}

export default DeleteButton
