import React from 'react';
import './App.scss';
import {DrawerNavContainer} from "./container/DrawerNavContainer";
import {Helmet} from "react-helmet";
import ogImage from "./res/imgs/ogImage.jpg";

function App() {
  const url = 'http://www.isabelakanji.ch';
  const title = 'Isabel Akanji';
  const description = 'Sanfte Hatha Yoga-Lektionen mit Isabel Akanji';

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

      <DrawerNavContainer/>
    </div>
  );
}

export default App;
