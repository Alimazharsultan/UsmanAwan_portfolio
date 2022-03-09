import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Section from '../components/Section'
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    

    emailjs.sendForm('service_yasmm7d', 'template_a9u03vc', e.target, 'user_xqaYI8HsMyZG5dzqDdBdu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}
  
  return (
    <Section id='contact' title='Contact'>
      <div className='row justify-content-between'>
      <div className='col-md-5 order-last order-lg-first' data-aos='fade-up'>
   
      <div className='subheading mb-3'>Contact or Book an event with me</div>
          
      <form style={{background: "transparent"}} onSubmit={sendEmail}>
                <div className='form-group'>
                <label htmlFor='username'>Full Name: </label>
                <input type='text'  placeholder="Write your Name" name="Name" />
                </div>
                <div className='form-group'>
                <label htmlFor='email'>Email address: </label>
                <input type='email'  placeholder="Email (optional)" name="email" />
                </div>
                <div className='form-group'>
                <label htmlFor='Contact'>Contact Number: </label>
                <input type='contact'  placeholder="Contact No (optional)" name="ContactNo" />
                </div>
           <div className='form-group'>
               <label htmlFor='userMessage'>Message: </label>
                <input type='text' rows="4" placeholder="Message" name="comments" />
                </div>
           
            <div className='form-group'>
                <label>Package: </label>
                <select  placeholder="Package" name="Packag" >
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                </select>
                </div>
            <div style={{padding:'0 0 0 50%'}}>
            <button type="submit" className="btn btn-info"  value="SendMessage">Submit</button>
            </div>
            </form>
            </div>
        <div className='col-md-6 mb-5 mb-lg-0' data-aos='fade-up'>
          <div className='subheading mb-3'>Reach out to me directly</div>
          <div className='contact-direct'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>Ghauri Town, Mars</p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+92 3355248016</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12552.671025684847!2d73.137877573449!3d33.62124134914612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb9ec83b2639%3A0xe30b86db8729fce7!2sGhauri%20Town%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e1!3m2!1sen!2s!4v1608478717653!5m2!1sen!2s" width="600" height="450"
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'
            ></iframe>
          </div>
        </div>
      </div>

      <p className='py-3 m-0 mt-5 text-center text-secondary'>
        Made with ❤ by Ali Mazhar Sultan
      </p>
    </Section>
  )
}

export default Contact
