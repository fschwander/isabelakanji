import React, {RefObject, useEffect} from "react";
import Logo from "../../../res/Logo";
import './Header.scss';
import * as d3 from "d3-scale";

interface HeaderInterface {
  scrollTop: number
}

export const Header: React.FC<HeaderInterface> = props => {
  const rootElement: RefObject<HTMLDivElement> = React.createRef();
  const logoContainerElement: RefObject<HTMLDivElement> = React.createRef();
  const topBackgroundElement: RefObject<HTMLDivElement> = React.createRef();

  const handleScroll = () => {
    scaleColorOnScroll();
    scaleSizeOnScroll();
    scaleOpacityOnScroll();
  }

  const scaleSizeOnScroll = () => {

    if (rootElement.current && logoContainerElement.current) {
      let scrollY = props.scrollTop;
      let maxY = rootElement.current.offsetHeight * 0.9;
      let yPos = (scrollY <= maxY ? scrollY : maxY) / 4;

      const sizeScale = d3.scaleLinear().domain([0, 200]).range([1, 1.4]);
      logoContainerElement.current.style.transform = `scale(${sizeScale(scrollY)}) translateY(${yPos}px)`;

      // const sizeLogoScale = d3.scaleLinear().domain([0, 200]).range([1, 1.2]);
      // const logo = document.getElementById("logo-shape");
      // logo.style.transform = `scale(${sizeLogoScale(scrollY)})`;
      // logo.style.transformOrigin = `center`;}
    }
  }

  const scaleOpacityOnScroll = () => {
    // let scrollY = window.scrollY;
    // let maxY = rootElement.offsetHeight * 0.4;

    // const opacityScale = d3.scaleLinear().domain([maxY - 100, maxY]).range([1, 0]);
    // logoContainerElement.style.opacity = opacityScale(scrollY);
  }

  const scaleColorOnScroll = () => {
    // const lightBlue = '#93BED5';
    // const darkBlue = '#4791B8';
    // const lightGreen = '#9CC7C8';
    // const darkGreen = '#5BA2A4';
    //
    // const maxY = 300;
    // const scrollY = window.scrollY;

    // const topColorScale = d3.scaleLinear().domain([0, maxY]).range([darkGreen, darkBlue]);
    // const bottomColorScale = d3.scaleLinear().domain([0, maxY]).range([lightBlue, lightGreen]);

    // let topColor = value => value <= maxY ? topColorScale(value) : topColorScale(maxY);
    // let bottomColor = value => value <= maxY ? bottomColorScale(value) : bottomColorScale(maxY);
    //
    // topBackgroundElement.style.backgroundImage = `linear-gradient(to bottom, ${topColor(scrollY)} 10%, ${bottomColor(scrollY / 4)} 90%)`;
    // logoContainerElement.style.border = `2px solid ${topColor(scrollY)}`;
  }

  useEffect(() => {
      // // console.log(rootElement);
      // if (rootElement.current) {
      //   rootElement.current.addEventListener('scroll', handleScroll)
      // }
      // handleScroll()
      // scaleColorOnScroll();
      // return () => {
      //   window.removeEventListener('scroll', handleScroll)
      //
      // }
      scaleColorOnScroll()
      handleScroll()
    }, [props.scrollTop]
  )


  return (
    <div id='Header' className='Header' ref={rootElement}>

      <span className='topBackgroundElement' ref={topBackgroundElement}/>

      <div className='logoContainer' ref={logoContainerElement}>
        <Logo/>
      </div>

      <div className='headerContainer'>
        <div className='specialHeader'>Yoga</div>
        <h1 className='specialSubheader'>Isabel Akanji</h1>
      </div>
    </div>
  )
}
