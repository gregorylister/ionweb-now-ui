import React from "react";
import { Card, CardBody, Row, Col, UncontrolledTooltip } from "reactstrap";
import { PanelHeader } from "components";
import { TagTable } from "components";
import { Button } from "components";

class ViewTags extends React.Component
{
    render()
    {
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xs={12} md={12}>
                                            <Card>
                                                <CardBody>
                                                    <Button id="add" size="sm" color="success" noMargins round><i className="now-ui-icons ui-1_simple-add"></i></Button>
                                                    <Button id="import"size="sm" color="success" noMargins round><i className="now-ui-icons arrows-1_share-66"></i></Button>
                                                    <Button id="delete"size="sm" color="danger" noMargins round><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                                                    <Button id="tips"size="sm" color="info" noMargins round><i className="now-ui-icons travel_info"></i></Button>
                                                    <UncontrolledTooltip placement="right" target={"add"} delay={0}>Add tag</UncontrolledTooltip>
                                                    <UncontrolledTooltip placement="right" target={"import"} delay={0}>Import CSV</UncontrolledTooltip>
                                                    <UncontrolledTooltip placement="right" target={"delete"} delay={0}>Delete selected</UncontrolledTooltip>
                                                    <UncontrolledTooltip placement="right" target={"tips"} delay={0}>Tips</UncontrolledTooltip>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <TagTable />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ViewTags;
