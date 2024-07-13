import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function AgeCalculator({calculateAge }) {
    //use state to manage user input(dateof birth)
    const [DateofBirth,setDateofBirth] = useState(null);

    //function to handle submit  function.it uses the calculateAgeprop  which is a function and passes the dateofbirth as parameter
    const handleSubmit=(e)=>{
        e.preventDefault();
        calculateAge(DateofBirth)
    }

  return (
    <div className='formcont'>
    
{/*create a form to accept user input which is the date of birth  onsubmit event listener*/}
        <form onSubmit={handleSubmit} >
            
            <div>
                <h3>Age CalculatorApp:</h3>
                <h5>Select your Date of birth below: </h5>
                
                
            </div>
            <div className='formcontrols'>
             {/*onchange event listener to handle the change  and set it to the state function */}   
            <input type="date"  value={DateofBirth} onChange={(e)=>setDateofBirth(e.target.value)}/>
            {/*button type submit to submit userinput */}
            <button type='submit' ><FaArrowAltCircleDown  size={35}/></button>
            
            </div>
        </form>
       
    </div>
  )
  
};
//define the prroptype as function
AgeCalculator.PropTypes={
    calculateAge:PropTypes.func.isRequired,

  }

