import React from 'react'
import './Dive.css'
// import  Course from '../../container/index'
// Card DATA
// title_course="Dive Course"
import courseData from '../../data/courseData.json'
import Course from '../../container/course/Course'
const Dive = () => {
  return (
    <div>
        {/* <Course  courseData={courseData}/>  */}
        <Course  courseData={courseData} />
    </div>
  )
}

export default Dive