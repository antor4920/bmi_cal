import React from 'react'
import './Bmi_cal.css'

 function Bmi_cal() {




  return (
    <div className="container">
        <h3>BMI Calculator</h3>
        <div className='Input_Field'>
        {/* <label>Age</label> */}
        <input type='number' placeholder='Height' ></input>
        </div>

        <div className='Input_Field'>
        {/* <label>Height</label> */}
        <input type='number' placeholder='Age' ></input>
        </div>

        <div>
            <button className="Btn">Calculate</button>
            <button className="Btn">Reset</button>
        </div>

        <h5>

        </h5>
       
    </div>
  )
}

export default Bmi_cal;
