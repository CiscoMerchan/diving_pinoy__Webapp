import React from 'react'
import './Dive.css'
// Data
import courseData from '../../data/courseData.json'
import funDiveData from '../../data/funDiveData.json'
import diveSiteData from '../../data/diveSiteData.json'
// Containers
import Course from '../../container/course/Course'
import DiveSite from '../../container/diveSite/DiveSite'
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
        <div className='bar'/>
          {/*Dive sites  */}
        <DiveSite
          cardData={diveSiteData}
        />  
    </div>
  )
}

export default Dive