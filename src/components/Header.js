import Logo from "../res/Logo";
import * as React from "react";
import './Header.scss';
import * as d3 from "d3-scale";

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.scaleSizeOnScroll = this.scaleSizeOnScroll.bind(this);
    this.scaleOpacityOnScroll = this.scaleOpacityOnScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.rootElement = React.createRef();
    this.logoContainerElement = React.createRef();
    this.backgroundElement = React.createRef();
  }

  handleScroll() {
    this.scaleColorOnScroll();
    this.scaleSizeOnScroll();
    this.scaleOpacityOnScroll();
  }

  scaleSizeOnScroll() {
    let scrollY = window.scrollY;
    let maxY = this.rootElement.offsetHeight * 0.9;
    let yPos = (scrollY <= maxY ? scrollY : maxY) / 4;

    const sizeScale = d3.scaleLinear().domain([0, 200]).range([1, 1.4]);
    this.logoContainerElement.style.transform = `scale(${sizeScale(scrollY)}) translateY(${yPos}px)`;

    const sizeLogoScale = d3.scaleLinear().domain([0, 200]).range([1, 1.2]);
    const logo = document.getElementById("logo-shape");
    logo.style.transform = `scale(${sizeLogoScale(scrollY)})`;
    logo.style.transformOrigin = `center`;
  }

  scaleOpacityOnScroll() {
    let scrollY = window.scrollY;
    let maxY = this.rootElement.offsetHeight * 0.4;

    const opacityScale = d3.scaleLinear().domain([maxY-100, maxY]).range([1, 0]);
    this.logoContainerElement.style.opacity = opacityScale(scrollY);
  }

  scaleColorOnScroll() {
    let darkColor = '#4791B8';
    let lightColor = '#93BED5';
    let maxY = 300;
    let scrollY = window.scrollY;

    const colorScale = d3.scaleLinear().domain([0, maxY]).range([lightColor, darkColor]);
    let color = value => value <= maxY ? colorScale(value) : darkColor;

    this.backgroundElement.style.backgroundImage = `linear-gradient(to top, #9CC7C8, ${color(scrollY / 2)} 80%, ${color(scrollY)} 90%)`;
    this.logoContainerElement.style.border = `2px solid ${color(scrollY)}`;

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.scaleColorOnScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div id='Header' className='Header' ref={el => this.rootElement = el}>

        <span className='topBackground' ref={el => this.backgroundElement = el}/>

        <div className='logoContainer' ref={el => this.logoContainerElement = el}>
          <Logo/>
        </div>

        <div className='headerContainer'>
          <div className='specialHeader'>Yoga</div>
          <h1 className='specialSubheader'>Isabel Akanji</h1>
        </div>
      </div>
    )
  }
}