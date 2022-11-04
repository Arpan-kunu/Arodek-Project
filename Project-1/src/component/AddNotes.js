import React from 'react'
import NotesForm from './NotesForm'

const AddNotes = (props) => {
    const {addItem} = props
    return(
        <div>
            <h2>Add Yours Notes</h2>
            <NotesForm addItem={addItem}/>
        </div>
    )
}

export default AddNotes