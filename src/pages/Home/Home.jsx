import React from 'react'
import './Home.css'
import { Dive, About} from '../../container'
import { Partners } from '../../components'
import Blog from '../../container/blog/Blog'
const Home = () => {
  return (
    <>
    <div className='bar'/>
    <Dive />
    <div className='bar'/>
    <Partners />
    <div className='bar'/>
    <About />
    <div className='bar'/>
    <Blog />

    </>
  )
}

export default Home