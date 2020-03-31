import './SchnapsContent.scss'
import React from "react";
import mountainImg from '../../res/imgs/mountains.svg';
import bottleIva from '../../res/imgs/bottle_iva.jpg';
import bottleArven from '../../res/imgs/bottle_arven.jpg';
import {Col, Container, Row} from "reactstrap";
import headerImgFront from '../../res/imgs/bottles_front.png'
import headerImgBack from '../../res/imgs/bottles_back.png';

interface SchnapsContentProps {
  scrollTop: number
}

export const SchnapsContent: React.FC<SchnapsContentProps> = (props) => {

  const Header = () => {
    return (<div className='header'>
        <div className={'header-img-container'} style={{transform: `translateY(${props.scrollTop / 2}px)`}}>
          <img className={'back'} src={headerImgBack} alt={'Hintergrundbild'}/>
          <img className={'front'} src={headerImgFront} alt={'Vordergrundbild'}
               style={{transform: `scale(${props.scrollTop / 3000 + 1})`}}/>
        </div>

        <div className={'header-text-container'}>
          <h1>Schnaps aus Savognin</h1>
          <h2>selbstgemacht & lecker</h2>
        </div>
      </div>
    )
  };

  const Content = () => {
    return (
      <Container className={'Content'}>
        <Row>
          <Col sm={0} md={1}/>
          <Col sm={12} md={5}>
            <img className={'bubble'} src={bottleIva} alt={'Schnapsbild'}/>
          </Col>
          <Col sm={12} md={5} className={'vertical-container'}>
            <h2>Iva</h2>
            <p>Hergestellt aus selbstgepflückter Schafgarbe</p>
            <p>21%, 4dl</p>
            <p>39.–</p>
          </Col>
          <Col sm={0} md={1}/>
        </Row>
        <Row>
          <Col sm={0} md={1}/>
          <Col sm={12} md={5} className={'vertical-container'}>
            <h2>Arvenschnaps</h2>
            <p>Hergestellt aus selbstgepflückter Schafgarbe</p>
            <p>21%, 4dl</p>
            <p>39.–</p>
          </Col>
          <Col sm={12} md={5}>
            <img className={'bubble'} src={bottleArven} alt={'Schnapsbild'}/>
          </Col>
          <Col sm={0} md={1}/>
        </Row>
      </Container>
    )
  };

  const Footer = () => {
    return (
      <div className={'footer'}>
        <img src={mountainImg} alt={'Hintergrundbild'}/>
      </div>
    )
  };

  return (
    <div className='SchnapsContent'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
};
