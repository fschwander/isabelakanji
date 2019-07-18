import './Footer.scss'
import React from 'react';

export default function Footer() {
  let emailLink = <a href='mailto:yoga@isabelakanji.ch'>E-Mail</a>;
  let studioLink = <a href='https://www.yoga-pilates-winterthur.ch/' target='_blank' rel='noopener noreferrer'>Yoga & Pilates</a>

  let googleStudioLocation = 'https://www.google.com/maps/place/Gr%C3%BCntalstrasse+24,+8405+Winterthur/@47.4853956,8.7672866,19.28z/data=!4m5!3m4!1s0x479a99de5e600857:0x205bd682ed3e7a99!8m2!3d47.4854459!4d8.7677075';
  let locationLink = <a target='_blank' rel='noopener noreferrer' href={googleStudioLocation}>Grüntalstrasse&nbsp;24</a>


  return (
    <div id='Footer' className='Footer'>

      <div className='bubbleContainer'>

        <div className='personBubble bubble'>
          <h3>Isabel Akanji</h3>
          <span>077 445 23 47</span>
          <span>{emailLink}</span>
        </div>

        <div className='studioContainer'>
          <div className='studioBubble bubble'>
            <span>im Studio</span>
            <span>{studioLink}</span>
          </div>
          <div className='addressBubble bubble'>
            <span>{locationLink}</span>
            <span>8405 Winterthur</span>
          </div>
        </div>

      </div>
    </div>
  )
}