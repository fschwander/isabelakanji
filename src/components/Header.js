import Logo from "../res/Logo";
import * as React from "react";
import './Header.scss';

export default function Header() {
  return (
    <div id='Header' className='Header'>
      <Logo/>
      <h1>Isabel Akanji</h1>
    </div>
  )
}