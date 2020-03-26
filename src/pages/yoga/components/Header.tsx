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
  const {scrollTop} = props;

  const handleScroll = () => {
    scaleSizeOnScroll();
    scaleOpacityOnScroll();
  }

  const scaleSizeOnScroll = () => {
    if (rootElement.current && logoContainerElement.current) {
      let maxY = rootElement.current.offsetHeight * 0.9;
      let yPos = (scrollTop <= maxY ? scrollTop : maxY) / 4;

      const sizeScale = d3.scaleLinear().domain([0, 200]).range([1, 1.4]);
      logoContainerElement.current.style.transform = `scale(${sizeScale(scrollTop)}) translateY(${yPos}px)`;

      const sizeLogoScale = d3.scaleLinear().domain([0, 200]).range([1, 1.2]);
      const logo = document.getElementById("logo-shape");
      if (logo) {
        logo.style.transform = `scale(${sizeLogoScale(scrollTop)})`;
        logo.style.transformOrigin = `center`;
      }
    }
  }

  const scaleOpacityOnScroll = () => {
    if (rootElement.current && logoContainerElement.current) {
      let maxY = rootElement.current.offsetHeight * 0.4;

      const opacityScale = d3.scaleLinear().domain([maxY - 100, maxY]).range([1, 0]);
      logoContainerElement.current.style.opacity = opacityScale(scrollTop).toString();
    }
  }

  useEffect(() => {
      handleScroll()
    }
  )

  return (
    <div id='Header' className='Header' ref={rootElement}>
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
