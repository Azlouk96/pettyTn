import React from 'react'
import Header from '../../components/header/Header'
import './landing.css'
import { useState, useEffect } from 'react';

function Landing() {
    const [text, setText] = useState('');
    const fullText = "Welcome to Petty Tn!";
  
    useEffect(() => {
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        if (currentIndex === fullText.length) {
          clearInterval(intervalId);
        } else {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        }
      }, 100); // Vous pouvez ajuster la vitesse de frappe en modifiant cet intervalle
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  return (
    <>
      
    <div>
     <Header />
      <section className="landpagecontent">
   <div className='paragraphe'>
   <img src="\img\pate.png" alt="" />
   <bold><p>{text}</p></bold>
        <p>
         <br/>
        Find your furry friend and give them a forever home. Our mission is to connect loving pet owners with adorable animals in need of a loving family. </p>
   </div>     

        <div className="picture">
          <img src="\img\image_processing20220523-1623-1mqcn9i.png" alt="" srcset="" />
        </div>
      </section>
    </div>
    

    </>
  )
}

export default Landing