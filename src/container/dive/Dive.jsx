import React from 'react';
import './dive.css';
import { DiveLeft, DiveRight, BookingBtn } from '../../components';
import  dive_A1  from '../../assets/img/PC091068MM.JPG';
import  dive_A2 from '../../assets/img/IMG_20160506_175832.jpg';
import  funpic01 from '../../assets/img/P6270968.JPG';
import  funpic02 from '../../assets/img/picfundive.png';
const Dive = () => {
  return (
    <div className='webapp__dive section__block section__padding' id='dive'>
      <div className='webapp__dive-title section__title'>
        <h1>Diving with Us</h1>
      </div>
      <div className='webapp__dive-content section__content'>
        <DiveLeft 
          img1={dive_A1}
          img2={dive_A2}
          subTitle={'Get Certify'}
          text={'Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.'}
        />
        <div className='booking_now-right'>
          <BookingBtn />
        </div>
        <DiveRight
          img1={funpic01}
          img2={funpic02}
          subTitle={'Fun Dives'}
          text={'Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.'}
         />
         <div className='booking_now-left'>
          <BookingBtn />
        </div>
      </div>
    </div>
  )
}

export default Dive