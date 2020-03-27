import React, {ReactElement, useState} from "react";
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
  const navItems: Array<NavItem> = [
    {
      text: 'Yoga',
      color: '#93BED5',
      component: <YogaPage/>
    },
    {
      text: 'Schnaps',
      color: '#DDE2B5',
      component: <SchnapsPage/>
    }
  ];

  return (
    <div className={`DrawerNavContainer`}>
      {navItems.map((item, i) => {
          const registerWidth = 2;

          return (

            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active button'}`}
                 style={{
                   backgroundColor: item.color,
                   width: i === activeIndex ? `calc(100% - ${(navItems.length - 1) * registerWidth}rem)` : `${registerWidth}rem`
                 }}
                 onClick={() => setActiveIndex(i)}
                 key={item.text + i}>

              <div className={'drawer-label'}
                   style={{minWidth: `${registerWidth}rem`}}
              >
                <h4>{item.text}</h4>
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
