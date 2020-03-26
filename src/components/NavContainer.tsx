import React, {useState} from "react";
import './NavContainer.scss';

export const NavContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ['Yoga', 'Schnaps', 'Foo'];

  return (
    <div className={`NavContainer`}>
      {navItems.map((item, i) => {
          return (
            <div className={`nav-item button ${i === activeIndex ? 'active' : 'not-active'}`}
                 onClick={() => setActiveIndex(i)}
                 key={item + i}>
              <p>{item}</p>
            </div>
          )
        }
      )}
    </div>
  )
}
