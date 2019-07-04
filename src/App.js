import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {

  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <div className='contentContainer'>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}