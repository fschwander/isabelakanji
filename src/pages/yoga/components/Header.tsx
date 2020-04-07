import React, {RefObject, useEffect} from "react";
import './Header.scss';
import * as d3 from "d3-scale";
import {ReactComponent as LogoSvg} from "../../../res/imgs/logo.svg";

interface HeaderInterface {
  scrollTop: number,
  windowHeight: string
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

      const darkBlue = '#4791B8';
      const darkGreen = '#5BA2A4';
      // @ts-ignore
      const topColorScale = d3.scaleLinear().domain([0, maxY]).range([darkGreen, darkBlue]);
      const logo: HTMLObjectElement = rootElement.current.getElementsByClassName("logo-svg")[0] as HTMLObjectElement;
      logo.style.borderColor = topColorScale(scrollTop);
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
    <div className='Header'
         ref={rootElement}
         style={{minHeight: `${props.windowHeight}`}}>
      <div className='logo-container' ref={logoContainerElement}>
        <LogoSvg className={'logo-svg'}/>
      </div>

      <div className='header-container'>
        <div className='special-header'>Yoga</div>
        <h1 className='special-subheader'>Isabel Akanji</h1>
      </div>
    </div>
  )
}
