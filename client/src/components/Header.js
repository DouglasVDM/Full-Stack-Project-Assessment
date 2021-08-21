import React from 'react'

const Header = ({ onAdd }) => {

  return (
    <div>
      <header onAdd className="App-header">
        <h1>Video Recommendation</h1>
        <button onClick={onAdd}>Add</button>
      </header>
    </div>
  )
}

export default Header
