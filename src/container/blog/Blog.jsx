import React from 'react';
import Article from '../../components/article/Article';
import  blog01 from '../../assets/img/blog01.JPG';
import  blog02 from '../../assets/img/blog02.JPG';
import  blog03 from '../../assets/img/blog03.JPG';
import './blog.css'


const Blog = () => {
  return (
    <div className='webapp__blog section__padding' id="blog">
      <div className='webapp__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are bloggining about it.</h1>
      </div>
      <div className='webapp__blog-container'>
        <div className='webapp__blog-container_groupA'>
         <Article imgUrl={blog01} date="Sept 31 2023" title="Surface interval" text={'Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset.Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng na modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging .'}/>
          
        </div> 
        <div className='webapp__blog-container_groupB'>
         <Article imgUrl={blog02} date="Sept 29 2023" title="Wreck dive" text={'Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng na  ...'}/>
         <Article imgUrl={blog03} date="Sept 25 2023" title="Diversity" text={'Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng na modelo ng ...'}/>
         
          
        </div>    
      </div>
    </div>
  )
}

export default Blog