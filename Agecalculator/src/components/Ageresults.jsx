import React from 'react'
import PropTypes from 'prop-types'

export default function Ageresults({age}) {
    
  return (
    <div className='results'>
                 <h4>your age is<i class="fa-solid fa-face-smile-wink"></i></h4>
           <p><span> {age.years}</span> years</p>
           <p><span> {age.months}</span> months</p>
           <p><span> {age.days} </span>days</p>
           

    </div>
  )
}
//setting the types
Ageresults.PropTypes={
    age:PropTypes.shape({
       years:PropTypes.number.isRequired,
       months:PropTypes.number.isRequired,
       days:PropTypes.number.isRequired,


    }).isRequired,

  }





  
