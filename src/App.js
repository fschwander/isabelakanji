import React from 'react';
import './App.scss';
import Introduction from "./components/Introduction";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
    </div>
  );
}