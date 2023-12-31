import React from 'react';
import Card from '../../components/card/Card';
import './Course.css'; 

const Course = ({ title_course, courseData }) => {
  return (
    <div className='webapp__course'>
      <div className='webapp__course-title'>
        <h2>{title_course}</h2>
      </div>
      <div className='webapp__course-container'>
        {/* Card component to display the courses */}
        {/* Map over courseData JSON file and render a Card component for each item */}
        {courseData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default Course;
