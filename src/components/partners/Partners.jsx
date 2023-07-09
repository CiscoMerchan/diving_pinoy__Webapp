import React from 'react'
import './partners.css'
import { padi, cressi, apeks, mares, partner01, partner02, scubapro } from './import'
const Partners = () => {
  return (
    <div className='webapp__partners section__padding'>
      <div>
        <img src={padi} alt='padi' />
      </div>
      <div>
        <img src={cressi} alt='cressi' />
      </div>
      <div>
        <img src={apeks} alt='apeks' />
      </div>
      <div>
        <img src={mares} alt='mares' />
      </div>
      <div>
        <img src={partner01} alt='partner01' />
      </div>
      <div>
        <img src={partner02} alt='partner02' />
      </div>
      <div>
        <img src={scubapro} alt='scubapro' />
      </div>
      
    </div>
  )
}

export default Partners