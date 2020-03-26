import React, {useState} from "react";
import './DrawerNavContainer.scss';
import {YogaPage} from "../pages/yoga/YogaPage";

export const DrawerNavContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ['Yoga', 'Schnaps', 'Foo'];

  return (
    <div className={`DrawerNavContainer`}>
      {navItems.map((item, i) => {
          return (
            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active'}`}
                 onClick={() => setActiveIndex(i)}
                 key={item + i}>

              <div className={'drawer-label button'}>{item}</div>

              <div className={'drawer-page-container'}>
                <YogaPage/>
              </div>

            </div>
          )
        }
      )}
    </div>
  )
}
