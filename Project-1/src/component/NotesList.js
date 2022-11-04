import React,{useState,useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'



const NotesList = (props) => {
    const {_id,title,body,removeItem} = props
    const [toggle,setToggle] = useState(false) 

    const handleRemove = () => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers : {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then((response)=>{
                const result = response.data 
               // console.log(result)
                removeItem(result._id)
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
       
    }

    const handleInfo = () => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers : {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data 
            //console.log(result)
            swal({
                title: result.title,
                text: result.body,
            })
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const handleToggle = () =>{
        setToggle(!toggle)
    }
  return(
   <div>
    <ul>
      
            <>
            <li><Link to="/mynotes/title" onClick={handleInfo}>{title}</Link></li>
               
               <button onClick={handleRemove}>remove note</button>
            </>
               
        
    </ul>
   </div>
  )
}

export default NotesList