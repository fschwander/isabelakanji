import './SchnapsPage.scss'
import React, {useState} from "react";
import {SchnapsContent} from "./SchnapsContent";

export const SchnapsPage: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
  }

  return(
    <div className={'SchnapsPage'} onScroll={handleScroll}>
      <SchnapsContent scrollTop={scrollTop}/>
    </div>
  )
}
