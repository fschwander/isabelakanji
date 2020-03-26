import Logo from "../../../res/Logo";
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
    this.topBackgroundElement = React.createRef();
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

    // const sizeLogoScale = d3.scaleLinear().domain([0, 200]).range([1, 1.2]);
    // const logo = document.getElementById("logo-shape");
    // logo.style.transform = `scale(${sizeLogoScale(scrollY)})`;
    // logo.style.transformOrigin = `center`;
  }

  scaleOpacityOnScroll() {
    let scrollY = window.scrollY;
    let maxY = this.rootElement.offsetHeight * 0.4;

    const opacityScale = d3.scaleLinear().domain([maxY-100, maxY]).range([1, 0]);
    this.logoContainerElement.style.opacity = opacityScale(scrollY);
  }

  scaleColorOnScroll() {
    let lightBlue = '#93BED5';
    let darkBlue = '#4791B8';
    let lightGreen = '#9CC7C8';
    let darkGreen = '#5BA2A4';

    let maxY = 300;
    let scrollY = window.scrollY;

    const topColorScale = d3.scaleLinear().domain([0, maxY]).range([darkGreen, darkBlue]);
    const bottomColorScale = d3.scaleLinear().domain([0, maxY]).range([lightBlue, lightGreen]);

    let topColor = value => value <= maxY ? topColorScale(value) : topColorScale(maxY);
    let bottomColor = value => value <= maxY ? bottomColorScale(value) : bottomColorScale(maxY);

    this.topBackgroundElement.style.backgroundImage = `linear-gradient(to bottom, ${topColor(scrollY)} 10%, ${bottomColor(scrollY/4)} 90%)`;
    this.logoContainerElement.style.border = `2px solid ${topColor(scrollY)}`;
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

        <span className='topBackgroundElement' ref={el => this.topBackgroundElement = el}/>

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
