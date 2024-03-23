import React from 'react';
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div className='text-center  w-100 bottom-0 bg-info'>
      
      <p className={`${styles.footerP} text-white`}>&copy; By Jagadeesh </p>
      <a href='mailto:vyomanautjagadeesh@gmail.com' target=' blank'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968534.png' alt='Gmail' className={styles.footImg}/></a>
      <a href='https://www.linkedin.com/in/jagadeesh-bariki-883b1122a/' target='blank' ><img  alt='LinkedIn'  className={styles.footImg} src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'/></a>
      <a href='https://github.com/Jagadeeshbariki' target='blank' ><img alt='GitHub' className={styles.footImg} src='https://cdn-icons-png.flaticon.com/128/3291/3291695.png' /></a>
      <a href='https://www.instagram.com/vyomanautjagadeesh/' target='blank' ><img alt='InstaGram' className={styles.footImg} src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'/></a>
      <a href='https://wa.me/916300963789' target='blank' ><img alt='WhatsApp' className={styles.footImg} src='https://cdn-icons-png.flaticon.com/128/3536/3536445.png'/></a>
      <a href='https://www.google.com/maps/@12.899798,77.5902424,18.97z?entry=ttu' target='blank' ><img alt='Location' className={styles.footImg} src='https://cdn-icons-png.flaticon.com/128/684/684908.png'/></a>
    
    </div>
  );
}

 
