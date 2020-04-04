import React, {ReactElement, useEffect, useRef, useState} from "react";
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
  const prevActiveIndex = useRef(0);
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

  const setActiveDrawer = (i: number) => {
    const prevIndex = activeIndex;
    const newIndex = i === activeIndex ? prevActiveIndex.current : i;
    setActiveIndex(newIndex)
    prevActiveIndex.current = prevIndex;
  };

  return (
    <div className={`DrawerNavContainer`}>
      {navItems.map((item, i) => {
          return (
            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active'}`}
                 key={item.text + i}
                 style={{
                   backgroundColor: item.color,
                   width: i === activeIndex ? `calc(100vw - ${(navItems.length - 1) * registerWidth}px)` : `${registerWidth}px`
                 }}>

              <div className={'drawer-label button'}
                   style={{minWidth: `${registerWidth}px`}}
                   onClick={() => setActiveDrawer(i)}>
                <h4 className={'link'}>{item.text}</h4>
              </div>

              <div className={'drawer-page-container'}>
                <div className={'inner-drawer-container'}
                     style={{width: `calc(100vw - ${navItems.length * registerWidth}px)`}}>
                  {item.component}
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
