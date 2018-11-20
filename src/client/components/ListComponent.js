import React from 'react';
import {
  ListGroup, ListGroupItem, Row, Col
} from 'reactstrap';

export default class ListComponent extends React.Component {
  render() {
    const elements = [{
      position: 1,
      trackName: 'thank u, next',
      artist: 'Ariana Grande',
      streams: 8108043,
      url: 'https://open.spotify.com/track/2rPE9A1vEgShuZxxzR2tZH'
    }];
    return (
      <ListGroup>
        {elements.map(element => <ListElement element={element} key={element.position} />)}
      </ListGroup>
    );
  }
}


class ListElement extends React.Component {
  render() {
    const up = (
      <svg fill="#84bd00" version="1.1" x="0" y="0" viewBox="0 0 12 12">
        <polygon points="0 9 12 9 6 3 " />
      </svg>
    );
    const same = (
      <svg fill="#3e3e40" version="1.1" x="0" y="0" viewBox="0 0 12 12">
        <rect y="4.5" width="12" height="3" />
      </svg>
    );
    const down = (
      <svg fill="#bd3200" version="1.1" x="0" y="0" viewBox="0 0 12 12">
        <polygon points="12 3 0 3 6 9 " />
      </svg>
    );
    return (
      <ListGroupItem tag="a" href="#">
        <Row>
          <Col xs="1">
            <div className="chart-table-image">
              <a href="https://spotifycharts.com/regional/">
                <img src="https://i.scdn.co/image/3492042deca1ed9a02e6d46ebe58807bbf8d2a51" alt="" />
              </a>
            </div>
          </Col>
          <Col xs="1">
            <div className="chart-table-position">{this.props.element.position}</div>
          </Col>
          <Col xs="1">
            <div className="chart-table-trend">
              <div className="chart-table-trend__icon">
                {down}
                {up}
                {same}
              </div>
            </div>
          </Col>
          <Col xs="7">
            <div className="chart-table-track">
              <strong>{this.props.element.trackName}</strong>
              <span>
by
                {this.props.element.artist}
              </span>
            </div>
          </Col>

          <Col xs="2">
            <div className="chart-table-streams">{this.props.element.streams}</div>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
