import './SchnapsPage.scss'
import React, {useState} from "react";
import {SchnapsContent} from "./SchnapsContent";

interface SchnapsPageProps {
  windowHeight: string
}

export const SchnapsPage: React.FC<SchnapsPageProps> = props => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
  }

  return(
    <div className={'SchnapsPage'} onScroll={handleScroll}>
      <SchnapsContent scrollTop={scrollTop} windowHeight={props.windowHeight}/>
    </div>
  )
}
