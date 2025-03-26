import {useState} from 'react';
function Updater(){
    const [count,Counter]=useState(0)
    return(
        <div>
           <h1>Count:{count}</h1>
           <button type='submit' onClick={()=>Counter(count +1)}>Increment</button>
           <button type='submit' onClick={()=>Counter(count -1)}>Decrement</button>
           <button type='submit' onClick={()=>Counter(0)}>Reset</button>
        </div>

    );
}
export default Updater;

