import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './Content.scss';

export default function Content() {

  return (
    <div id='Content' className='Content'>
      <Introduction/>
      <Events/>
    </div>
  )
}

function Introduction() {
  return (
    <div id='Introduction' className='Introduction'>
      <h2>Sanfte Hatha Yoga-Lektionen mit Isabel Akanji</h2>
      <p>Die Lektionen orientieren sich am klassischen Hatha Yoga-Stil mit Körperübungen (asanas), Atemtechniken
        (pranayamas), Entspannung (savasana) und Meditation.</p>
      <p>In einer ruhigen Umgebung lernen wir, die Selbstwahrnehmung
        zu steigern, Ruhe zu finden, Spannungen loszulassen und den Atem in Fluss zu halten. Die Lektionen sind für
        AnfängerInnen und für Erfahrene geeignet und werden ergänzt mit wertvollen Tipps für den Alltag im Büro,
        unterwegs oder zu Hause.</p>
      <p>Nach jeder Lektion verspüren wir den Yoga-Effekt und verlassen den Raum
        entspannt und voller Kraft für den Tag.</p>
    </div>
  )
}

function Events() {
  return (
    <div id='Events' className='Events'>
      <h2>Angebot & Preise</h2>

      <Container>
        <Row>
          <Col md={4}>
            <div className='semesterContainer bubble'>
              <h3>Quartal</h3>
              <div>19. August – 30. September 2019</div>
            </div>

          </Col>

          <Col md={4}>
            <h3>Hatha Yoga</h3>
            <div>(geeignet für AnfängerInnen und Fortgeschrittene)</div>
            <p>Montag, 10:00-11:15</p>

            <h3>Yoga für SeniorInnen</h3>
            <div>Montag, 08:30-09:45</div>

            <div className='padding-top'>Einsteigen ist jederzeit möglich. Es sind keine Vorkenntnisse nötig.</div>
          </Col>

          <Col md={4}>
            <h3>Privatstunden</h3>
            <div>Termine nach Absprache</div>

            <div className='pricesContainer bubble'>
              <h3>Preise</h3>
              <div>Einzeleintritt 32.–</div>
              <div>ganzes Quartal 182.–</div>
              <div>Privatlektion 100.–</div>
              <div>Schnupperstunde gratis</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}