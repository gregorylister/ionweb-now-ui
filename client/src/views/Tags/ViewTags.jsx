import React from "react";
import { Card, CardBody, Row, Col, UncontrolledTooltip, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PanelHeader } from "components";
import { TagTable } from "components";
import { Button } from "components";
import { style } from "typestyle";

const tooltipOpacity = style({
    opacity: "1 !important"
});

class ViewTags extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {addTagModal: false};
        this.toggleAddTagModal = this.toggleAddTagModal.bind(this);
    }

    toggleAddTagModal()
    {
        this.setState({
            addTagModal: !this.state.addTagModal
        });
    }

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
                                                    <Button onClick={this.toggleAddTagModal} id="add" size="sm" color="success" noMargins round><i className="now-ui-icons ui-1_simple-add"></i></Button>
                                                    <Button id="import"size="sm" color="success" noMargins round><i className="now-ui-icons arrows-1_share-66"></i></Button>
                                                    <Button id="delete"size="sm" color="danger" noMargins round><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                                                    <Button id="tips"size="sm" color="info" noMargins round><i className="now-ui-icons travel_info"></i></Button>
                                                    <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"add"} delay={0}>Add tag</UncontrolledTooltip>
                                                    <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"import"} delay={0}>Import CSV</UncontrolledTooltip>
                                                    <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"delete"} delay={0}>Delete selected</UncontrolledTooltip>
                                                    <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"tips"} delay={0}>Tips</UncontrolledTooltip>
                                                    <Modal size="lg" isOpen={this.state.addTagModal} toggle={this.toggleAddTagModal}>
                                                        <ModalHeader className="justify-content-center" toggle={this.toggleAddTagModal}>
                                                            Modal Title
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in B</p>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="default">
                                                                Nice Button
                                                            </Button>
                                                            <Button color="danger" onClick={this.toggleAddTagModal}>
                                                                Close
                                                            </Button>
                                                        </ModalFooter>
                                                    </Modal>
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
