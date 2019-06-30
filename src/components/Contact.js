import './Contact.scss'
import React from 'react';

export default function Contact() {
  let emailLink = <a href='mailto:kontakt@isabelakanji.ch'>E-Mail</a>;
  let studioLink = <a href='https://www.yoga-pilates-winterthur.ch/'>Yoga & Pilates</a>

  let googleStudioLocation = 'https://www.google.com/maps/place/yoga-pilates/@47.4855158,8.7655516,17z/data=!3m1!4b1!4m5!3m4!1s0x479a99de5e600857:0x8cc78893708f4992!8m2!3d47.4855158!4d8.7677403';
  let locationLink = <a target='_blank' rel='noopener noreferrer' href={googleStudioLocation}>Grüntalstrasse 24</a>


  return (
    <div className='Contact'>
      <h2>Kontakt</h2>

      <div className='bubbleContainer'>
        <div className='personBubble bubble'>
          <span>Isabel Akanji</span>
          <span>{emailLink}</span>
          <span>077 445 23 47</span>
        </div>
        <div className='studioContainer'>
          <div className='studioBubble bubble'>
            <span>{studioLink}</span>
          </div>
          <div className='addressBubble bubble'>
            <span>Adresse</span>
            <span>{locationLink}</span>
            <span>8405 Winterthur</span>
          </div>

        </div>
      </div>
    </div>
  )
}