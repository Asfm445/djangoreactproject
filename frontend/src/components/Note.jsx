import React from 'react'
import "../styles/Note.css"

function Note({note,onDelete}) {
    const formmattedDate=new Date(note.create_at).toLocaleDateString("en-US")
    // console.log(note.created_at)
    // console.log(note)
    return ( <div className='note-container'>
        <p className='note-title'>{note.title}</p>
        <p className='note-content'>{note.content}</p>
        <p className='note-date'>{formmattedDate}</p>
        <button className='delete-button' onClick={()=>onDelete(note.id)}>delete</button>
    </div> );
}

export default Note;
 