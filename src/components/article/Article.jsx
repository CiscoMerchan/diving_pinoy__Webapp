import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title, text}) => {
  return (
    <div className='webapp__blog-container_article '>
   
      <div className='webapp__blog-container_article-image'>
        <img 
          src={imgUrl} alt='Blog'
        />
      </div>
      <div className='webapp__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <p>Read Full Article</p>  
      </div>
    </div>
  )
}

export default Article