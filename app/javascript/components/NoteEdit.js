import React from 'react'

const NoteEdit = (props) =>{
  return(
    <div id="main">
      <h1>Edit This Note</h1>
      <p>note id here: {props.note.id}</p>
      <div id="nav">
      <a href='/notes'>Return to notes</a>
      </div>
      <div class="noteForm">
        <form action={`/notes/${props.note.id}`} method='post'>
          <input type="hidden" name="_method" value="put"/>
          <h2>Note title</h2>
          <input type="text" defaultValue={props.note.title} name='note[title]'/>
  
          <h2>Author</h2>
          <input type="text" defaultValue={props.note.author} name='note[author]'/>
  
          <h2>Body</h2>
          <textarea defaultValue={props.note.body} name='note[body]'></textarea>
  
          <button type='submit'>Update Note</button>
          <button type='reset'>Reset Form</button>
  
        </form>
      </div>
    </div>
  )
}

export default NoteEdit 
