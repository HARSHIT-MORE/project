import React,{useState}from 'react'

function Registration() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[password,setPassword]=useState('')
    const [conform,setConform]=useState('')
  return (
    <>
    <form className='form'>
        <label htmlFor='name'>Name :</label>
        <input type='name'id='name'name='name'value={name} onChange={(e)=>setName(e.target.value)} required/>
        <br/>
        <label htmlFor='email'>Email :</label>
        <input type='email'id='email'value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <br/>
        <label htmlFor='tel'>Mobile :</label>
        <input type='tel'id='tel'value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
        <br/>
        <label htmlFor='password'>Password :</label>
        <input type='password'id='password'value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <br/>
        <label htmlFor='conform'>Re-Enter Password :</label>
        <input type='password'id='conform'value={conform} onChange={(e)=>setConform(e.target.value)}required/>
        <br/>
        <button type='submit' onClick={()=>console.log('data submitted')}>Register</button>
    </form>
    </>
  )
}

export default Registration