import React from 'react'
import './programs.css'
import program1 from '../../assets/project images/program-1.png';
import program2 from '../../assets/project images/program-2.png';
import program3 from '../../assets/project images/program-3.png';
import program_icon1  from '../../assets/project images/program-icon-1.png';
import program_icon2  from '../../assets/project images/program-icon-2.png';
import program_icon3  from '../../assets/project images/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs '>
      <div className="program">
        <img src={program1}/>
        <div className="caption">
            <img src={program_icon1}/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2}/>
        <div className="caption">
            <img src={program_icon2}/>
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3}/>
        <div className="caption">
            <img src={program_icon3}/>
            <p> Post graduation </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
