import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';

export default class CalendarComponent extends React.Component {
    render () {
        return <CalendarHeatmap
            startDate={new Date('2017-01-01')}
            endDate={new Date('2018-08-15')}
            values={[
                { date: '2016-01-01' },
                { date: '2016-01-22' },
                { date: '2016-01-30' },
                // ...and so on
            ]}
        />
    }
}