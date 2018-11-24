import React from 'react';
// import CalendarHeatmap from 'react-calendar-heatmap';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const elements = [{
      position: 1,
      date: '10/03/18',
    }, {
      position: 1,
      date: '11/03/18',
    }, {
      position: 1,
      date: '12/03/18',
    }];
    const { dropdownOpen } = this.state;
    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        { /* <Calendar Heatmap
        startDate={new Date('2017-01-01')}
        endDate={new Date('2018-08-15')}
        values={[
          { date: '2016-01-01' },
          { date: '2016-01-22' },
          { date: '2016-01-30' },
          // ...and so on
        ]}
      /> */ }
        <DropdownToggle>
                Fecha
        </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: data => ({
                ...data,
                styles: {
                  ...data.styles,
                  overflow: 'auto',
                  maxHeight: 100,
                },
              }),
            },
          }}
        >
          <DropdownItem>10/12/18</DropdownItem>

          {elements.map(element => (
            <DropdownItem>
              {' '}
              {element.date}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
