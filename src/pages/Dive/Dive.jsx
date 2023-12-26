import React from 'react'
import './Dive.css'
// import  Course from '../../container/index'
// Card DATA
// title_course="Dive Course"
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