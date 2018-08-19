import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorldMap from './WorldMap'
import ListComponent from './ListComponent'
import CalendarComponent from './CalendarComponent'

export default class BootstrapComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 9, offset: 1 }}>
                        <WorldMap/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 9, offset: 1 }}>
                        <CalendarComponent/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 9, offset: 1 }}>
                        <ListComponent/>
                    </Col>
                </Row>
            </Container>
        );
    }
}