import Logo from "../res/Logo";
import * as React from "react";
import './Header.scss';
import * as d3 from "d3-scale";

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.topBackground = React.createRef();
  }

  handleScroll() {
    this.setTopBackground();
  }

  setTopBackground() {
    let darkColor = '#589fd5';
    let lightColor = '#93BED5';
    let maxY = 300;
    let scrollY = window.scrollY;

    const colorScale = d3.scaleLinear().domain([0, maxY]).range([lightColor, darkColor]);
    let color = value => value <= maxY ? colorScale(value) : darkColor;

    this.topBackground.style.backgroundImage = `linear-gradient(to top, #9CC7C8, ${color(scrollY/2)} 80%, ${color(scrollY)} 90%)`;
  }

  componentDidMount() {
    this.setTopBackground();
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div id='Header' className='Header'>
        <Logo/>
        <span className='topBackground' ref={el => this.topBackground = el}/>

        <h1>Isabel Akanji</h1>
      </div>
    )
  }
}