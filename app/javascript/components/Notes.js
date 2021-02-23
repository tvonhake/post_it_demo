import React from 'react'

const Notes = (props) => {
    const renderNotes = () =>{
        return props.notes.map( note => {
            return (
                <div className="note-container">
                    <h1>{note.title}</h1>
                    <p>Author: {note.author}</p>
                    <p>ID: {note.id}</p>
                    <hr class="noteSeparator"></hr>
                    <p>{note.body}</p>
                 </div>   
            )
        })
    }
    return(
        <div id='main'>
            <h1>Notes</h1>
            <a href='/notes/new'>New Note Form</a>
            {renderNotes()}
        </div>   
    )
}
export default Notes