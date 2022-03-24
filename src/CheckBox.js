import React,{useState} from 'react'

function CheckBox() {
    const[admin,setAdmin]=useState(false);
    const[volunteer,setVolunteer]=useState(false)
    const[corporate,setCorporate]=useState(false)
    const[society,setSociety]=useState(false)
  return (
    <>
    <input type="radio" name='raise' value={admin} onChange={(e)=>setAdmin(e.target.admin)}/>Admin
    <input type="radio" name='raise' value={volunteer} onChange={(e)=>setVolunteer(e.target.admin)}/>volunteer
    <input type="radio" name='raise' value={corporate} onChange={(e)=>setCorporate(e.target.admin)}/>Corporate
    <input type="radio" name='raise' value={society} onChange={(e)=>setSociety(e.target.admin)}/>Society         
    </>
  )
}

export default CheckBox