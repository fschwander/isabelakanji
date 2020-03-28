import './Content.scss';
import React from "react";
import {Container, Row, Col} from "reactstrap";

export const Content: React.FC = () => {

  return (
    <Container className='Content'>
      <Introduction/>
      <Events/>
      <SignUp/>
    </Container>
  )
}

function Introduction() {
  let googleStudioLocation = 'https://www.google.com/maps/place/Gr%C3%BCntalstrasse+24,+8405+Winterthur/@47.4853956,8.7672866,19.28z/data=!4m5!3m4!1s0x479a99de5e600857:0x205bd682ed3e7a99!8m2!3d47.4854459!4d8.7677075';
  let locationLink = <a target='_blank' rel='noopener noreferrer' href={googleStudioLocation}>Grüntalstrasse&nbsp;24</a>

  return (
    <div className='Introduction'>
      <h2>Sanfte Hatha Yoga-Lektionen mit Isabel Akanji</h2>
      <p>Die Lektionen orientieren sich am klassischen Hatha Yoga-Stil mit Körperübungen (asanas), Atemtechniken
        (pranayamas), Entspannung (savasana) und Meditation. Ziel ist unsere Energien aufzubauen und mit
        einem gesunden Körper und viel Lebenskraft durch den Alltag zu gehen.</p>
      <p>In einer ruhigen Umgebung lernen wir, die Selbstwahrnehmung zu steigern, Ruhe zu finden, Spannungen loszulassen
        und den Atem in Fluss zu halten. Die Lektionen sind für AnfängerInnen und für Erfahrene geeignet und werden
        ergänzt mit wertvollen Tipps für den Alltag im Büro, unterwegs oder zu Hause.</p>
      <p>Nach jeder Lektion verspüren wir den Yoga-Effekt und verlassen den Raum entspannt und voller Kraft für den
        Tag.</p>

      <Row className='rendezvous-container'>
        <Col sm={1} md={2}/>
        <Col sm={3} md={2}>
          <h3 className='bubble'>Wo?</h3>
        </Col>
        <Col sm={7} md={5}>
          <p>...im Yoga & Pilates Studio an der {locationLink}, 8405 Winterthur beim Bahnhof Seen.</p>
        </Col>
        <Col sm={1} md={3}/>
      </Row>
    </div>
  )
}

function Events() {
  return (
    <div className='Events'>
      <h2>Angebot & Preise</h2>

      <Row>
        <Col md={4}>
          <div className='semester-container bubble'>
            <p>Anlassdaten</p>
            <h3>Spätsommerblock</h3>
            <p>19. August – 30. September 2019</p>
          </div>
        </Col>

        <Col md={4}>
          <h3>Hatha Yoga</h3>
          <p>Montag, 10:00–11:15</p>

          <h3>Yoga für SeniorInnen</h3>
          <div>Montag, 08:30–09:45</div>

          <p className='padding-top'>Alle Lektionen sind geeignet für AnfängerInnen
            und Fortgeschrittene.</p>
          <p>Einsteigen ist jederzeit möglich.</p>
        </Col>

        <Col md={4}>
          <h3>Privatstunden</h3>
          <div>Termine nach Absprache.</div>

          <div className='prices-container bubble'>
            <h3>Preise</h3>
            <div>Einzeleintritt 32.–</div>
            <div>ganzer Spätsommerblock 182.–</div>
            <div>Privatlektion 100.–</div>
            <div>Schnupperstunde gratis</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function SignUp() {
  return (
    <div id='SignUp' className='SignUp'>
      <h2>Anmelden</h2>
      <p>Anmeldungen für Schnupper-, Einzel- und Privatstunden bis Sonntagabend per <a
        href='mailto:yoga@isabelakanji.ch'>E-Mail</a> oder Telefon. Danke!</p>
    </div>
  )
}
