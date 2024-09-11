import React, { useState }  from 'react'
import './Bmi_cal.css'

 function Bmi_cal() {

      const [height, setHeight]= useState(0)
     const [weight, setWeight]= useState(0)
     const [result,SetResult]=useState('')
       
    function ShowResult (){
      let feetConvert= Number(height)*0.3048;
      let number=Number(weight)/(feetConvert*feetConvert)
       SetResult( "Your BMI is: "+ number.toFixed(1))
     }

     function Reset(){
      
     }
    
   
   

  return (
    <div className="container">
        <h3>BMI Calculator</h3>
        <div className='Input_Field'>
        <label>Height</label>
        <input type='number' placeholder='Height(feet)' required  onChange={(e)=> setHeight(e.target.value)}></input>
        </div>

        <div className='Input_Field'>
        <label>Weight</label>
        <input type='number' placeholder='weight(Kg)' required onChange={(e)=> setWeight(e.target.value)}></input>
        </div>

        <div>
            <button className="Btn" onClick={ShowResult} type='submit'>Calculate</button>
            <button  className="Btn" type='submit' onClick={Reset} >Reset</button>
        </div>

        <h5>
          {result}
        </h5>
       
    </div>
  )
}

export default Bmi_cal;
