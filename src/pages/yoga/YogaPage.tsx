import './YogaPage.scss';
import React, {createRef, RefObject, useEffect, useState} from "react";
import ogImage from '../../res/imgs/ogImage.jpg';
import {Helmet} from 'react-helmet';
import {Header} from "./components/Header";
import * as d3 from "d3-scale";
import {Footer} from './components/Footer';
import {Content} from './components/Content';

export const YogaPage: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const rootRef: RefObject<HTMLDivElement> = createRef();
  const [backgroundGradient, setBackgroundGradient] = useState()

  const url = 'http://www.isabelakanji.ch';
  const title = 'Isabel Akanji | Yoga';
  const description = 'Sanfte Hatha Yoga-Lektionen mit Isabel Akanji';

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
    scaleColorOnScroll()
  }

  const scaleColorOnScroll = () => {
    const lightBlue = '#93BED5';
    const darkBlue = '#4791B8';
    const lightGreen = '#9CC7C8';
    const darkGreen = '#5BA2A4';

    const maxY = 300;

    // @ts-ignore
    const topColorScale = d3.scaleLinear().domain([0, maxY]).range([darkGreen, darkBlue]);
    // @ts-ignore
    const bottomColorScale = d3.scaleLinear().domain([0, maxY]).range([lightBlue, lightGreen]);

    let topColor = (value: number) => value <= maxY ? topColorScale(value) : topColorScale(maxY);
    let bottomColor = (value: number) => value <= maxY ? bottomColorScale(value) : bottomColorScale(maxY);

    setBackgroundGradient(`linear-gradient(to bottom, ${topColor(scrollTop)} 10%, ${bottomColor(scrollTop / 4)} 90%)`)
  }

  useEffect(() => {
    scaleColorOnScroll()
  })

  return (
    <div className={'YogaPage'} ref={rootRef}
         onScroll={handleScroll}
         style={{backgroundImage: backgroundGradient}}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={ogImage}/>
      </Helmet>

      <Header scrollTop={scrollTop}/>
      <div className='contentContainer'>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}
