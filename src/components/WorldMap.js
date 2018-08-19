import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import worldData from './110m'

class WorldMap extends Component {
    constructor() {
        super()
        this.state = {
            worldData: [],
        }
        this.handleCountryClick = this.handleCountryClick.bind(this)
    }
    projection() {
        return geoMercator()
            .scale(100)
            .translate([ 800 / 2, 450 / 2 ])
    }
    componentDidMount() {
        /*fetch("./110m.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(worldData => {
                    this.setState({
                        worldData: feature(worldData, worldData.objects.countries).features,
                    })
                })
            })*/
        this.setState({
            worldData: feature(worldData, worldData.objects.countries).features,
        })
    }
    handleCountryClick(countryIndex) {
        console.log("Clicked on a country: ", countryIndex)
    }
    render() {
        return (
            <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                    {
                        this.state.worldData.map((d,i) => (
                            <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(this.projection())(d) }
                                className="country"
                                onClick={ () => this.handleCountryClick(i) }
                            />
                        ))
                    }
                </g>
            </svg>
        )
    }
}

export default WorldMap