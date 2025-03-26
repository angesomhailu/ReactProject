import React, { useState } from 'react'
function BMI(){
    const[Weight,setWeight]=useState("");
    const[Height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);
     const calculateBMI=(e)=>{
        e.prventDefault();
        if(Weight & Height){
          const bmiValue=((Weight/(Height*Height))*703).toFixed(2);
          setBmi(bmiValue)
        }
        else{
            alert("enter a valid input!")
        }
     };
     const reload=()=>{
        setWeight("");
        setHeight("");
        setBmi(null);
     };
    return(
         <div className='App'>
            <div className='container'>
                <h1>BMI Calculator</h1>
                <div>
                    <form onSubmit={calculateBMI}>
                    <label>Weight(Kgs)</label>
                    <input type='text' placeholder='enter the weight' value={Weight} onChange={(e)=>setWeight(e.target.value)}/>
                    </form>
                    
                </div>
                <div>
                    <form>
                    <label>Height(ms)</label>
                    <input type='text' placeholder='enter the height'value={Height} onChange={(e)=>setHeight(e.target.value)}/>
                    </form>
                    
                </div>
                
                
                <div>
                    <button className='btn1' type='submit'>
                        Submit
                    </button>
                    <button className='btn2' type='submit'onClick={reload}>
                        Reload
                    </button>
                </div>
                {bmi &&
                    (<div className='centre'>
                        <p>Your BMI is: {}</p>
                     </div>)
                }
                
            </div>
         </div>
    );
}
export default BMI;