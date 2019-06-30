import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import About from "./components/About";

export default function App() {

  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Introduction/>
      <About/>
    </div>
  );
}