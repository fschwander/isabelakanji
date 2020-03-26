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
    },
    {
      text: 'Foo',
      color: '#E5B8B8',
      component: <SchnapsPage/>
    }];

  return (
    <div className={`DrawerNavContainer`}>
      {navItems.map((item, i) => {

          return (

            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active button'}`}
                 style={{backgroundColor: item.color}}
                 onClick={() => setActiveIndex(i)}
                 key={item.text + i}>

              <div className={'drawer-label'}>{item.text}</div>
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
