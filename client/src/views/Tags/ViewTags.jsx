import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
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
                                                    <Button style={{height: "18px", marginTop: "0px", marginBottom: "0px"}} size="sm" color="success" simple icon iconMini><i className="now-ui-icons ui-1_simple-add"></i></Button>
                                                    <Button style={{height: "18px", marginTop: "0px", marginBottom: "0px"}} size="sm" color="success" simple icon iconMini><i className="now-ui-icons arrows-1_share-66"></i></Button>
                                                    <Button style={{height: "18px", marginTop: "0px", marginBottom: "0px"}} size="sm" color="danger" simple icon iconMini><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                                                    <Button style={{height: "18px", marginTop: "0px", marginBottom: "0px"}} size="sm" color="info" simple icon iconMini><i className="now-ui-icons travel_info"></i></Button>
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
