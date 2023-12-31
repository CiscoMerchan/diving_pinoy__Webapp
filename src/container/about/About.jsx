import React from 'react';
import './about.css';
import { DiveLeft, BookingBtn } from '../../components';
import  dive_A1  from '../../assets/img/PC091068MM.JPG';
import  dive_A2 from '../../assets/img/IMG_20160506_175832.jpg';
const About = () => {
  return (
    <div className='webapp__about section__block section__padding' id='about'>
      <div className='webapp__about-title section__title'>
        <h1>Who We Are ?</h1>
      </div>
      <div className='webapp__dive-content section__content'>
        <DiveLeft 
          img1={dive_A1}
          img2={dive_A2}
          subTitle={''}
          text={'Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.'}
        />
        <div className='booking_now-right'>
          <BookingBtn />
        </div>
      </div>
    </div>
  )
}

export default About