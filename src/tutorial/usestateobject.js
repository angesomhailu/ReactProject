
import {useState} from 'react';
function Stateobject(){
    const [name,setName]=useState({Fname:'' , Lname:''})

    return(
        <div>
         <label>enter your first name:</label><input type='text' value={name.Fname} onChange={e=>setName({...name,Fname:e.target.value})}/><br/>
         <label>enter your last name:</label><input type='text' value={name.Lname} onChange={e=>setName({...name,Lname:e.target.value})}/>
         <h1>Your first name is:{name.Fname}</h1>
         <h1>Your last name is:{name.Lname}</h1>
        </div>
    );
}
export default Stateobject;

