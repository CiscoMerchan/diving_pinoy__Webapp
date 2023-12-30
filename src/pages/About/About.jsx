import React from 'react'
import './About.css'

const About = () => {
  
   return (
    <div className='webapp_about'>
        <div className='webapp_about-title'>
            <h1>About Boracay</h1>
            <img src='' alt=""/>
        </div>
        <div className='webapp_about-container'>
            <div className='webapp_about-container_intro'>
                <p></p>
                <img src='' alt=""/>
            </div>
            <div className='webapp_about-container_land'>
                <h2>Boracay on Land</h2>
                <div>
                    <img src='' alt=""/>
                    <p></p>
                </div>
            </div>
            <div className='webapp_about-container_UW'>
            <h2>Boracay UnderWater</h2>
            <div>
                <img src='' alt=""/>
                <p></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About