import React from 'react'

const Header = ({ onAdd, showAdd }) => {

  return (
    <div>
      <header onAdd className="App-header">
        <h1>Video Recommendation</h1>
        <button onClick={onAdd} style={{backgroundColor: showAdd ? 'red' : 'green'}} >{showAdd ? 'Close' : 'Add'}</button>
      </header>
    </div>
  )
}

export default Header
