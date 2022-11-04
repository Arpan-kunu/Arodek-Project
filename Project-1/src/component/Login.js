import React,{useState} from "react";
import axios from 'axios'

const Login = (props) => {
    const {handleAuth} = props
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            email : email,
            password : password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/login',form)
             .then((response)=>{
                const result = response.data 
               if(result.hasOwnProperty('errors')){
                alert(result.message)
               }else{
                alert('successfully logged in')
                localStorage.setItem('token',result.token)
                props.history.push('/')
                handleAuth()
               }
             })
             .catch((error)=>{
                alert(error.message)
             })
           
    }

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Login Account</h2>
            <input 
             type="text"
             placeholder="enter user email"
             value={email}
             onChange={handleChange}
             name="email"
            />
            <br />
            <input 
             type="password"
             placeholder="enter user password"
             value={password}
             onChange={handleChange}
             name="password"
            />
            <br />
            <input type="submit"/>
            </form>
            
        </div>
    )
}

export default Login