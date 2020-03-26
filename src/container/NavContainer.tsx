import React, {useState} from "react";
import './NavContainer.scss';
import {YogaPage} from "../pages/yoga/YogaPage";

export const NavContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ['Yoga', 'Schnaps', 'Foo'];

  return (
    <div className={`NavContainer`}>
      {navItems.map((item, i) => {
          return (
            <div className={`register-nav-item horizontal-container ${i === activeIndex ? 'active' : 'not-active'}`}
                 onClick={() => setActiveIndex(i)}
                 key={item + i}>

                <div className={'register-label button'} >{item}</div>
                <YogaPage/>

            </div>
          )
        }
      )}
    </div>
  )
}
