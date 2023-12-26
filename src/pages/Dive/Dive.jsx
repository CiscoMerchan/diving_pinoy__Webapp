import React from 'react'
import './Dive.css'
// Data
import courseData from '../../data/courseData.json'
import funDiveData from '../../data/funDiveData.json'
import Course from '../../container/course/Course'
const Dive = () => {
  return (
    <div>
        {/* <Course  courseData={courseData}/>  */}
        <Course  
          title_course= {`Dive Courses`}
          courseData={courseData} />
        <div className='bar'/>
          {/* FunDive section */}
        <Course
          title_course={`Fun Dive Packs`}
          courseData={funDiveData}
        />  
    </div>
  )
}

export default Dive