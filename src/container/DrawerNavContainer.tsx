import React, {ReactElement, useEffect, useState} from "react";
import './DrawerNavContainer.scss';
import {YogaPage} from "../pages/yoga/YogaPage";
import {SchnapsPage} from "../pages/schnaps/SchnapsPage";

interface NavItem {
  text: string,
  color: string,
  component: ReactElement
}

export const DrawerNavContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [registerWidth, setRegisterWidth] = useState(0)
  const navItems: Array<NavItem> = [
    {
      text: 'Schnaps',
      color: '#DDE2B5',
      component: <SchnapsPage/>
    },
    {
      text: 'Yoga',
      color: '#93BED5',
      component: <YogaPage/>
    }
  ];

  useEffect(() => {
    const updateSize = () => {
      setRegisterWidth(window.innerWidth * 0.04 < 30 ? 30 : window.innerWidth * 0.04);
    };
    window.addEventListener('resize', () => updateSize());
    updateSize()
  });

  return (
    <div className={`DrawerNavContainer`}>
      {navItems.map((item, i) => {
          return (
            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active button'}`}
                 style={{
                   backgroundColor: item.color,
                   width: i === activeIndex ? `calc(100% - ${(navItems.length - 1) * registerWidth}px)` : `${registerWidth}px`
                 }}
                 onClick={() => setActiveIndex(i)}
                 key={item.text + i}>

              <div className={'drawer-label'} style={{minWidth: `${registerWidth}px`}}>
                <h4 className={'link'}>{item.text}</h4>
              </div>
              <div className={'drawer-page-container'}>
                {item.component}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
