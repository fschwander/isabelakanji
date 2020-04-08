import './SchnapsContent.scss'
import React, {createRef, RefObject} from "react";
import mountainImg from '../../res/imgs/mountains.svg';
import bottleIva from '../../res/imgs/bottle_iva.jpg';
import bottleArven from '../../res/imgs/bottle_arven.jpg';
import {Col, Container, Row} from "reactstrap";
import headerImgFront from '../../res/imgs/bottles_front.png'
import headerImgBack from '../../res/imgs/bottles_back.png';

interface SchnapsContentProps {
  scrollTop: number,
  windowHeight: string
}

interface ProductItemInterface {
  img: string,
  header: string,
  text: Array<string>
}

export const SchnapsContent: React.FC<SchnapsContentProps> = (props) => {
    const headerTextRef: RefObject<HTMLDivElement> = createRef();

    const productItems: Array<ProductItemInterface> = [
      {
        img: bottleIva,
        header: 'Iva',
        text: [
          'Hergestellt aus selbstgepflückter Schafgarbe',
          '21%, 3.75dl',
          '39.–'
        ]
      },
      {
        img: bottleArven,
        header: 'Arvenschnaps',
        text: [
          'Hergestellt aus selbstgepflückter Schafgarbe',
          '21%, 3.75dl',
          '39.–'
        ]
      }
    ];

    return (
      <div className='SchnapsContent'>
        <div className='header' style={{minHeight: props.windowHeight}}>
          <div className={'header-img-container'} style={{minHeight: `calc(${props.windowHeight} * 0.8)`}}>
            <img className={'back'} src={headerImgBack} alt={'Hintergrundbild'}/>
            <img className={'front'} src={headerImgFront} alt={'Vordergrundbild'}
                 style={{transform: `scale(${props.scrollTop / 3000 + 1})`}}/>
          </div>

          <div className={'header-text-container'} ref={headerTextRef}>
            <h1>Produkte aus Savognin</h1>
            <h2>selbstgemacht & lecker</h2>
          </div>
        </div>

        <Container className={'body'}>
          <Row>
            <Col>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </Col>
          </Row>

          {productItems.map((item: ProductItemInterface, i: number) => {
            return (
              <Row className={`item-row ${i % 2 === 0 ? 'even' : 'un-even'}`} key={item.header + i}>
                <Col sm={0} md={1}/>
                <Col sm={12} md={5}>
                  <img src={item.img} alt={`Bild: ${item.header}`}/>
                </Col>
                <Col sm={12} md={5} className={'vertical-container'}>
                  <div className={'text-container'}>
                    <h2>{item.header}</h2>
                    {item.text.map(text => <p key={text}>{text}</p>)}
                  </div>
                </Col>
                <Col sm={0} md={1}/>
              </Row>
            )
          })}
        </Container>

        <div className={'footer'}>
          <div className={'order-container'}>
            <h2>Bestellungen</h2>
            <p>Jederzeit gerne per <a href='mailto:yoga@isabelakanji.ch'>E-Mail</a>. Danke!</p>
          </div>
          <img src={mountainImg} alt={'Hintergrundbild'} style={{maxHeight: `calc(${props.windowHeight} * 0.6)`}}/>
        </div>
      </div>
    )
  }
;
