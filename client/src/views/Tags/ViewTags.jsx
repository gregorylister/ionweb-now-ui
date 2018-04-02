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
                                    <div className="mainToolbar">
                                        <Button style={{marginTop: "0px", marginBottom: "0px"}} size="sm" color="success" simple icon iconMini><i className="now-ui-icons ui-1_simple-add"></i></Button>
                                        <Button style={{marginTop: "0px", marginBottom: "0px"}} size="sm" color="primary" simple icon iconMini><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                                    </div>
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
