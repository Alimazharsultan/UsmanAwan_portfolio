import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import usman from '../assets/usmann.jpg'

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className='social-icon'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: 'https://www.instagram.com/usmann_awan/',
      icon: <FaInstagram/>,
    },
    {
      href: 'https://www.facebook.com/bun.ny.3572846',
      icon: <FaFacebookF />,
    },
  ]

  return (
    <Section id='about'>
      <div className='aboutbackimg'>
       
      <h1 className='mb-0' style={{fontSize:'70px'}}>
          Usman  
          <i class="fas fa-camera-retro"></i>
        <span className='text-primary'>Awan  
      
      </span>
      </h1>
      
      <div className='subheading mb-3' style={{fontFamily:'Lucida Console', fontSize:'25px'}}>
        Islamabad, Pakistan
        
      </div>  
        <div className='subheading mb-3' style={{fontFamily:'Langer, cursive', fontSize:'25px'}}>
        <a style={{}} href='mailto:usmannawan321@gmail.com'>
          usmannawan321@gmail.com
        </a>
        </div>
      <p className='lead mb-4'>
        Usman is a dynamic Islamabad-based content maker. He bagan his photographic journey in 2016 from Air Media Club. He covered some extensive events and made his mark in Air University. Our main purpose is Customer loyalty and satisfaction. We put our energies and brains to Produce content better than our competitors by getting out of our comfort zones. Usman also has a team of productive and well-trained other content creators.
      
      </p>
      <div style={{padding:'40px 0 0 45%'}}>
        <div className='cards2'>
      <figure><img  src={usman} alt="img" style={{height:'220px'}}/>
      </figure>
        {/* <video
        style={{left:'20%'}}
        width="380"
        height="240"
        controls
        autoPlay
        muted
      >
        <source src={vid} type="video/mp4" />
      </video>  */}
      </div>
      <div style={{paddingLeft:'3%', paddingTop:'5px'}}>
      <div style={{paddingLeft:'5%'}} className='social-icons'>
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
                <div style={{paddingTop:'20px', paddingLeft:'8%'}} className='btn-group mb-5'>
               <Link onClick={() => (window.location = '/#contact')}>
              <button className='btn'>Book Me</button>
                </Link>
               </div>
      </div>
      </div>

      
      </div>
    </Section>
  )
}
