import React from 'react'

const NoteNew = (props) =>{
  return(
    <div>
      <h1>Form</h1>
      <form action="/notes" method='post'>
        <p>Page title</p>
        <input name='note[title]'/>

        <p>Author</p>
        <input name='note[author]'/>

        <p>Body</p>
        <input name='note[body]'/>

        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default NoteNew