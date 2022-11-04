import React from 'react'
import NotesList from './NotesList'

const NotesContainer = (props) => {
    const {notes,removeItem} = props
 
    return(
        <div>
            
            {notes.length === 0 ?(
                <>
                <h3>No Record Found</h3>
                <p>Add your first note</p>
                </>
            ):(
                <>
                <h2>Notes List - {notes.length}</h2>
                </>
            )
            }
            {notes.map((ele)=>{
                return <NotesList key={ele._id} {...ele} removeItem={removeItem}/>
            })}
        </div>
    )
}

export default NotesContainer