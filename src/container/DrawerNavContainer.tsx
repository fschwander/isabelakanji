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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const prevActiveIndex = useRef(0);
  const [registerWidth, setRegisterWidth] = useState(0);
  const registerHeight = 50;
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
      setIsSmallScreen(window.innerWidth <= 600);
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
                   width: isSmallScreen ? '100vw' : i === activeIndex ? `calc(100vw - ${(navItems.length - 1) * registerWidth}px)` : `${registerWidth}px`,
                   height: !isSmallScreen ? '100vh' : i === activeIndex ? `calc(100vh - ${(navItems.length - 1) * registerHeight}px)` : `${registerHeight}px`
                 }}>

              <div className={'drawer-label button'}
                   style={{
                     minWidth: !isSmallScreen ? `${registerWidth}px` : '',
                     minHeight: isSmallScreen ? `${registerHeight}px` : ''
                   }}
                   onClick={() => setActiveDrawer(i)}>
                <h4 className={'link'}>{item.text}</h4>
              </div>

              <div className={'drawer-page-container'}>
                <div className={'inner-drawer-container'}
                     style={{width: !isSmallScreen ? `calc(100vw - ${navItems.length * registerWidth}px)` : ''}}>
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
