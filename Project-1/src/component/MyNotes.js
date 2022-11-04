import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddNotes from './AddNotes'
import NotesContainer from './NotesContainer'

const MyNotes = (props) => {
    const [notes,setNotes] = useState([])
    useEffect(()=>{
      axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
        headers : {
            'x-auth' : localStorage.getItem('token')
        }
      })
      .then((response)=>{
        const result = response.data 
        setNotes(result)
      })
      .catch((err)=>{
        alert(err.message)
      })
    },[])
    const addItem = (note) =>{
       setNotes([...notes,note])
    }
   const removeItem = (id) => {
     const result = notes.filter((ele)=>{
         return ele._id !== id
     })
     setNotes(result)
   } 
    return(
        <div>
            <h2>My Notes</h2>
            <NotesContainer notes={notes} removeItem={removeItem}/>
            <AddNotes addItem={addItem}/>
        </div>
    )
}

export default MyNotes