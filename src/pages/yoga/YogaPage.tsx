import './YogaPage.scss';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ogImage from '../../res/imgs/ogImage.jpg';
import {Helmet} from 'react-helmet';

export const YogaPage: React.FC = () => {
  const url = 'http://www.isabelakanji.ch';
  const title = 'Isabel Akanji | Yoga';
  const description = 'Sanfte Hatha Yoga-Lektionen mit Isabel Akanji';

  return (
    <div className={'YogaPage'}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={ogImage}/>
      </Helmet>

      <Header/>
      <div className='contentContainer'>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}
