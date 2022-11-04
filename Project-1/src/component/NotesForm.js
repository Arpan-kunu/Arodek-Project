import React ,{useState}from 'react'
import axios from 'axios'

const NotesForm = (props) => {
    const {addItem} = props
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const handleChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else if(e.target.name === 'body'){
            setBody(e.target.value)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        //console.log('form',formData)
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
             .then((response)=>{
                const result = response.data 
                addItem(result)
             })
             .catch((error)=>{
                alert(error.message)
             })
             setTitle('')
             setBody('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>title</label><br />
                <input type="text" value={title} onChange={handleChange} name="title" />
                <br/>
                <label>body</label><br />
                <input type="text"value={body} onChange={handleChange} name="body"/>
                <br />
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default NotesForm