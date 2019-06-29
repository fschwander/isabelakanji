import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import About from "./components/About";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.topBackground = React.createRef();
  }

  handleScroll() {
    console.log(window.scrollY);
    this.topBackground.style.backgroundImage = `linear-gradient(to top, #9CC7C8 , #93BED5)`;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <span className='topBackground' ref={el => this.topBackground = el}/>
        <Header/>
        <Introduction/>
        <About/>
      </div>
    );
  }
}