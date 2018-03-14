import React from "react";
import {
    Card, CardBody, Row, Col
} from "reactstrap";
// react components used to create a SVG / Vector map
import {
    ComposableMap, ZoomableGroup, Geographies, Geography,
} from "react-simple-maps";
// function that returns a color based on an interval of numbers
import { scaleLinear } from "d3-scale";

import { PanelHeader } from "components";

var i = 0;

const colorScale = scaleLinear()
    .domain([0, 1, 50, 100])
    .range(["#E5E5E5", "#B2B2B2", "#565656", "#000000"]);

class VectorMap extends React.Component
{
    render()
    {
        return (
            <div>
                <PanelHeader
                    content={
                        <div className="header text-center">
                            <h2 className="title">Vector Map</h2>
                            <p className="category">Looks great on any resolution. Made by our friends from <a href="https://github.com/zcreativelabs/react-simple-maps" target="_blank" rel="noopener noreferrer">zcreativelabs</a>.</p>
                        </div>
                    }
                />
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>
                            <Card>
                                <CardBody>
                                    <div id="worldMap" className="map map-big">
                                        <div className="jvectormap-container" style={{backgroundColor: "transparent"}}>
                                            <ComposableMap style={{ width: "100%" }}>
                                                <ZoomableGroup>
                                                    <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json">
                                                    {(geographies, projection) => geographies.map(geography =>
                                                    {
                                                        var style;
                                                        switch (geography.properties.ISO_A3) {
                                                            case "IND":
                                                                style = {default: { fill: colorScale(14.43) }};
                                                                break;
                                                            case "FRA":
                                                                style = {default: { fill: colorScale(18.43) }};
                                                                break;
                                                            case "CAN":
                                                                style = {default: { fill: colorScale(12.43) }};
                                                                break;
                                                            case "RUS":
                                                                style = {default: { fill: colorScale(16.43) }};
                                                                break;
                                                            case "BRA":
                                                                style = {default: { fill: colorScale(4.43) }};
                                                                break;
                                                            case "USA":
                                                                style = {default: { fill: colorScale(53.23) }};
                                                                break;
                                                            case "AUS":
                                                                style = {default: { fill: colorScale(10.35) }};
                                                                break;
                                                            case "DEU":
                                                                style = {default: { fill: colorScale(28.43) }};
                                                                break;
                                                            case "GBR":
                                                                style = {default: { fill: colorScale(7.87) }};
                                                                break;
                                                            case "ROU":
                                                                style = {default: { fill: colorScale(5.94) }};
                                                                break;
                                                            default:
                                                                style = {default: { fill: colorScale(0) }};
                                                                break;
                                                        }
                                                        return (
                                                            <Geography
                                                                key={ i++ }
                                                                geography={ geography }
                                                                projection={ projection }
                                                                onClick={ this.handleClick }
                                                                style={style}
                                                            />
                                                        );
                                                    })}
                                                    </Geographies>
                                                </ZoomableGroup>
                                            </ComposableMap>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default VectorMap;
