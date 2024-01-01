import React from 'react'
import './About.css'
import AboutCard from '../../components/about_card/AboutCard'

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
  /*/images/about/seahorse.JPG
/images/about/boracayOnLand.JPG
/images/about/boracay_UW.JPG */

   return (
    <div className='webapp_about'>
        <div className='webapp_about-title'>
            <h1>About Boracay</h1>
            <div className='webapp_about-title_image'>
            <img src='/images/about/Phi-Boracay.png' alt="about_Phi-Boracay"/>
            </div>
        </div>
        {/* Introduction */}
        <AboutCard 
            title={``}
            image={`/images/about/seahorse.JPG`}
            text={text.intro}
        />
        {/* On Land */}
        <AboutCard 
            title={`Boracay on Land`}
            image={`/images/about/boracayOnLand.JPG`}
            text={text.onLand}
        />
        
    </div>
  )
}

export default About