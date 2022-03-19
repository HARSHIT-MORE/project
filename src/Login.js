import React,{useState} from 'react'

export const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  return (
    <div>
        <form className='form'>
        <label htmlFor="email">Email :</label>
        <input type='email' id='email'name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <br/>
        <label htmlFor="password">Password :</label>
        <input type='password'id='password'name='password'value={password} onChange={(e)=>setPassword(e.target.value)}required/>
        </form> 
        <br/>
        <button type='submit' onClick={()=>{console.log("data submitted")}}>Submit</button> 
    </div>
  )
}

