import React, { useState, useEffect } from 'react'
import Section from '../components/Section'
import weddingImage from '../assets/wedding.jpg'
// import gold from ''
// import platinum from ''
// import silver from ''


const Packages = () => {
  return(
    <>
    <Section id='Packages' title='Packages'>
          
    <div>
            <div className="cards2">
                 <div style={{width:'50%'}}>
                  <figure><img  src={weddingImage} alt="img" style={{height:'220px'}}/></figure>
                  <div style={{paddingLeft:'34%'}}>
                  <h2 style={{color:'black',fontSize: '40px'}}>Silver</h2>
                  <p style={{color:'black',fontSize: '20px'}}>40k Rupees</p>  
                
                  <h3 style={{color:'black',fontSize: '25px'}}>1 Day:</h3>    
                  <li style={{color:'black',fontSize: '20px'}}>2 Photographers</li>    
                  <li style={{color:'black',fontSize: '20px'}}>1 Videographer</li>    
                  <h3 style={{color:'black',fontSize: '25px'}}>Deliverables: </h3>    
                  <li style={{color:'black',fontSize: '20px'}}>1 album</li>    
                  <li style={{color:'black',fontSize: '20px'}}>1 cinematic highlight (5 mins)</li>    
                  </div>
                  </div>
                 <div style={{width:'50%'}}>
                  <figure><img  src={weddingImage} alt="img" style={{height:'220px'}}/></figure>
                  <div style={{paddingLeft:'34%'}}>
                  <h2 style={{color:'black',fontSize: '40px', }}>Gold</h2>
                  <p style={{color:'black',fontSize: '20px', }}>50k Rupees</p>  
                
                  <h3 style={{color:'black',fontSize: '25px', }}>1 Day:</h3>    
                  <li style={{color:'black',fontSize: '20px', }}>2 Photographers</li>    
                  <li style={{color:'black',fontSize: '20px', }}>2 Videographers</li>    
                  <h3 style={{paddingTop:'5px',color:'black',fontSize: '25px', }}>Deliverables: </h3>    
                  <li style={{color:'black',fontSize: '20px', }}>1 album</li>    
                  <li style={{color:'black',fontSize: '20px', }}>2 videos (Highlights and full video)</li>    
                  </div>
                 </div>
                 <div style={{width:'50%'}}>
                  <figure><img  src={weddingImage} alt="img" style={{height:'220px'}}/></figure>
                  <div style={{paddingLeft:'34%'}}>
                  <h2 style={{color:'black',fontSize: '40px'}}>Platinum</h2>
                  <p style={{color:'black',fontSize: '20px'}}>60k Rupees</p>  
                
                  <h3 style={{color:'black',fontSize: '25px'}}>1 Day:</h3>    
                  <li style={{color:'black',fontSize: '20px'}}>3 Photographers</li>    
                  <li style={{color:'black',fontSize: '20px'}}>3 Videographers</li>    
                  <h3 style={{color:'black',fontSize: '25px'}}>Deliverables: </h3>    
                  <li style={{color:'black',fontSize: '20px'}}>2 album</li>    
                  <li style={{color:'black',fontSize: '20px'}}>2 videos (Highlights and full video)</li>    
                  <li style={{color:'black',fontSize: '20px'}}>With drone coverage</li>   
                
                 </div>
                </div>

              
              </div>  
                        
                        
                     
        </div>
    </Section>
    </>

  );
}

export default Packages
