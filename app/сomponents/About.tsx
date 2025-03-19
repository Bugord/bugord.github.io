import React from 'react'
import Section from './Section'

const About = () => {
  return (
    <div className='bg-green-700 h-dvh pt-12'>
      About
    </div>
  )
}

const AboutSection = () => Section(<About/>, 'about', 'About')

export default AboutSection 