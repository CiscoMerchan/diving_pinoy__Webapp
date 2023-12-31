import React from 'react'
import './About.css'

const About = () => {
  const text = {
    intro:`Boracay island is 10.32km2 in the archipelago of Visayas, Philippines. This is about 300 km south of Manila and less than a kilometer from the northern tip of the island of Panay.
	What makes the island quite attractive is the ease in which it is accessed. It has two international airports: Kalibo (less than two hours by van) and Caticlan (15 minutes), to the port where you embark one of the "Banka", a mere 20 minutes from Boracay island.
`

  }
   return (
    <div className='webapp_about'>
        <div className='webapp_about-title'>
            <h1>About Boracay</h1>
            <img src='' alt=""/>
        </div>
        <div className='webapp_about-container'>
            <div className='webapp_about-container_intro'>
                <p>{text.intro}</p>
                <img src='' alt=""/>
            </div>
            <div className='webapp_about-container_land'>
                <h2>Boracay on Land</h2>
                <div className='webapp_about-container_land-container'>
                    <img src='' alt=""/>
                    <p></p>
                </div>
            </div>
            <div className='webapp_about-container_UW'>
                <h2>Boracay UnderWater</h2>
                <div className='webapp_about-container_UW-container'>
                    <img src='' alt=""/>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About