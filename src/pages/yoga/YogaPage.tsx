import './YogaPage.scss';
import React, {useState} from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ogImage from '../../res/imgs/ogImage.jpg';
import {Helmet} from 'react-helmet';
import {Header} from "./components/Header";

export const YogaPage: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const url = 'http://www.isabelakanji.ch';
  const title = 'Isabel Akanji | Yoga';
  const description = 'Sanfte Hatha Yoga-Lektionen mit Isabel Akanji';

  const handleScroll = (e:any) => {
    setScrollTop(e.target.scrollTop);
  }

  return (
    <div className={'YogaPage'} onScroll={handleScroll}>
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
