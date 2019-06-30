import Logo from "../res/Logo";
import * as React from "react";
import './Header.scss';
import * as d3 from "d3-scale";

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.scaleLogo = this.scaleLogo.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.logoContainer = React.createRef();
    this.topBackground = React.createRef();
  }

  handleScroll() {
    this.setTopBackground();
    this.scaleLogo();
  }

  scaleLogo() {
    let scrollY = window.scrollY;
    let maxY = 500;

    const sizeScale = d3.scaleLinear().domain([0, 200]).range([1, 1.4]);
    let yPos = (scrollY <= maxY ? scrollY : maxY) / 4;
    this.logoContainer.style.transform = `scale(${sizeScale(scrollY)}) translateY(${yPos}px)`;

    const opacityScale = d3.scaleLinear().domain([maxY-100, maxY]).range([1, 0]);
    this.logoContainer.style.opacity = opacityScale(scrollY);
    // this.logoContainer.style.opacity = scrollY >= maxY ? '0' : '1';

  }

  setTopBackground() {
    let darkColor = '#4791B8';
    let lightColor = '#93BED5';
    let maxY = 300;
    let scrollY = window.scrollY;

    const colorScale = d3.scaleLinear().domain([0, maxY]).range([lightColor, darkColor]);
    let color = value => value <= maxY ? colorScale(value) : darkColor;

    this.topBackground.style.backgroundImage = `linear-gradient(to top, #9CC7C8, ${color(scrollY / 2)} 80%, ${color(scrollY)} 90%)`;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.setTopBackground();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div id='Header' className='Header'>
        <div className='logoContainer' ref={el => this.logoContainer = el}>
          <Logo/>
        </div>
        <span className='topBackground' ref={el => this.topBackground = el}/>

        <h1>Isabel Akanji</h1>
      </div>
    )
  }
}