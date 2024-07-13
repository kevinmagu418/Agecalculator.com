

import './App.css'
import Ageresults from './components/Ageresults';
import AgeCalculator from './components/AgeCalculator'
import { differenceInYears } from "date-fns";
import { differenceInDays } from "date-fns";
import { differenceInMonths } from "date-fns";

import { useState } from 'react';
function App() {
 //use state to manage and set user age based on date of birth 
const [age,setAge]=useState({
    years:0,
months:0,
days:0
})

  const calculateAge=(DateofBirth)=>{
    const today=new Date();
  
    const dateofbirthobj=new Date(DateofBirth)
    console.log({today,dateofbirthobj})
    const ageyears=differenceInYears(today,dateofbirthobj);

const agemonths=differenceInMonths(today,dateofbirthobj);


const agedays=differenceInDays(today,dateofbirthobj);
console.log({ageyears,agedays,agemonths })
setAge({
  years:ageyears,
  months:agemonths,
  days:agedays
})
      
        
  }
  return (
    <>
    <div className='container'>
      <AgeCalculator calculateAge={calculateAge} />
      <Ageresults age={age}  />


    </div>
  
    </>
  )
}

export default App
