import React from 'react'
import './About.css'

const About = () => {
  const text = {
    intro:`Boracay island is 10.32km2 in the archipelago of Visayas, Philippines. This is about 300 km south of Manila and less than a kilometer from the northern tip of the island of Panay.
	What makes the island quite attractive is the ease in which it is accessed. It has two international airports: Kalibo (less than two hours by van) and Caticlan (15 minutes), to the port where you embark one of the "Banka", a mere 20 minutes from Boracay island.`,
    onLand: `The Island for all tastes and colors.
    Boracay is known all over the world for its white sand beach and turquoise waters.
    For those who wish to do other activities than diving, Boracay offers many activities, such as: kitesurfing, parasailing, kayaking, sailing, karting, golf, jet skiing, etc.
    It is also well known for its festive atmosphere and nightlife, with many bars and clubs of different atmospheres ; local and international culinary varieties ; and in regard to accommodation, there is something in everybody's budget.`,
    underWater: `	Like the vast majority of islands in the Philippines, Boracay has a lot to offer in diving, from those who wish to discover the underwater world for the first time, to experienced divers. The high season is from the end of November to May, however the best period specifically for diving is between May and June, with an average water temperature between 29C ° and 30C °, and the visibility goes from 15m to over 30m.
    Boracay has 12 dive sites in the west and 5 in the East (diving on the East side is only during  Habagat *).`
  }

   return (
    <div className='webapp_about'>
        <div className='webapp_about-title'>
            <h1>About Boracay</h1>
            <img src='/images/about/Phi-Boracay.png' alt="about_Phi-Boracay"/>
        </div>
        <div className='webapp_about-container'>
            <div className='webapp_about-container_intro'>
                <p>{text.intro}</p>
                <img src='' alt=""/>
            </div>
            <div className='webapp_about-container_land'>
                <h2>Boracay on Land</h2>
                <div className='webapp_about-container_land-container'>
                    <img src='/images/about/onland.JPG' alt="about_onLand"/>
                    <p>{text.onLand}</p>
                </div>
            </div>
            <div className='webapp_about-container_UW'>
                <h2>Boracay UnderWater</h2>
                <div className='webapp_about-container_UW-container'>
                    <img src='/images/about/uW.jpg' alt="about_uW"/>
                    <p>{text.underWater}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About