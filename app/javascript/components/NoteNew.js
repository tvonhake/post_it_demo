import React from 'react'

const NoteNew = () =>{
  return(
    <div id="main">
      <h1>Create a New Note</h1>
      <div id="nav">
      <a href='/notes'>Return to notes</a>
      </div>
      <div class="noteForm">
        <form action="/notes" method='post'>
          <h2>Note title</h2>
          <input type="text" name='note[title]'placeholder="Title"/>
  
          <h2>Author</h2>
          <input type="text" name='note[author]'placeholder="Author"/>
  
          <h2>Body</h2>
          <textarea name='note[body]' placeholder="Write your note here" ></textarea>
  
          <button type='submit'>Add Note</button>
          <button type='reset'>Reset Form</button>
  
        </form>
      </div>
    </div>
  )
}

export default NoteNew