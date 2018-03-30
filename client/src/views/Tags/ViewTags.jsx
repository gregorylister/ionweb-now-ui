import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap";
import { PanelHeader } from "components";
import { TagTable } from "components";

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
                                <CardHeader><CardTitle></CardTitle></CardHeader>
                                <CardBody>
                                    <div className="toolbar">
                                        {/* Insert toolbar buttons here */}
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
