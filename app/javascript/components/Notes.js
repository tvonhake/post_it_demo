import React from 'react'

const Notes = (props) => {
    const renderNotes = () =>{
        return props.notes.map( note => {
            return (
                <div className="note-container">
                    <div id="note-content">
                    <h1>{note.title}</h1>
                    <p>Author: {note.author}</p>
                    <p>ID: {note.id}</p>
                    <hr class="noteSeparator"></hr>
                    <p>{note.body}</p>
                    </div>
                    
                    <a href={`/notes/${note.id}`}>Open</a>
                    <a href={`/notes/${note.id}/edit`}>Edit</a>
                    <a href={`/notes/${note.id}`} data-method='delete'>Delete note</a>
                 </div>
            )
        })
    }
    return(
        <div id='main'>
            <h1>Notes</h1>
            <div id='nav'>
                <a href={`/notes/new`}>New Note Form</a>
            </div>
            {renderNotes()}
        </div>   
    )
}
export default Notes