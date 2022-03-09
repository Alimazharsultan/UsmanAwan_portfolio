import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Avatar from '../assets/usman.JPG'
import { Link } from 'react-router-dom';

export default function Navigation() {
  const navItems = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Portfolio',
      href: '#portfolio',
    },
    {
      name: 'Packages',
      href: '#Packages',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
    {
      name: 'Customer Review',
      href: '#Customer',
    },
    
  ]

  return (
    <Navbar
      collapseOnSelect
      variant='dark'
      expand='lg'
      className='fixed-top'
      id='sideNav'
    >
      <Link onClick={() => (window.location = '/#about')} className='navbar-logo'>
          USMAN     
          <i class="fas fa-camera-retro"></i>
          AWAN
        </Link>
      <Navbar.Brand onClick={() => (window.location = '/#about')}>
      
        <span className='d-none d-lg-block'>
          <motion.img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={Avatar}
            alt='Usman Awan'
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
          />
        </span>
      </Navbar.Brand>
     
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {navItems.map((navItem, index) => (
            <Nav.Link href={navItem.href} key={index}>
              {navItem.name}
            </Nav.Link>
          ))}
        </Nav>
        
      </Navbar.Collapse>
      <Link onClick={() => (window.location = '/#contact')}>
      <button className='btn'>Book</button>
    </Link>
    </Navbar>
  )
}
