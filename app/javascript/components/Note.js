import React from 'react'

const Note = (props) => {
  return (
    <div id='main'>
      <h1>Notes</h1>
        <div id='nav'>
          <a href='/notes'>Return to notes</a>
          <a href={`/notes/new`}>New Note Form</a>
        </div>
      <div className="note-container">
        <div id="note-content">
          <h1>{props.note.title}</h1>
          <p>Author: {props.note.author}</p>
          <p>ID: {props.note.id}</p>
          <hr class="noteSeparator"></hr>
          <p>{props.note.body}</p>
        </div>
        
        <a href={`/notes/${props.note.id}/edit`}>Edit</a>
        <a href={`/notes/${props.note.id}`} data-method='delete'>Delete note</a>
      </div>
    </div>
  )
}

export default Note