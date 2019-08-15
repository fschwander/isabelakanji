import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {Helmet} from "react-helmet";
import ogImage from './res/imgs/ogImage.jpg';

export default function App() {
  let url = 'http://www.isabelakanji.ch';
  let title = 'Isabel Akanji | Yoga';
  let description = 'Sanfte Hatha Yoga-Lektionen mit Isabel Akanji';

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={ogImage}/>
      </Helmet>

      <Navigation/>
      <Header/>
      <div className='contentContainer'>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}