import React from "react";
import { Card, CardBody, Row, Col, UncontrolledTooltip } from "reactstrap";
import { PanelHeader } from "components";
import { TagTable } from "components";
import { Button } from "components";
import { TagForm } from "components";
import { style } from "typestyle";

const tooltipOpacity = style({
    opacity: "1 !important"
});

class ViewTags extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            tag_code: "",
            tag_number: "",
            item_name: "",
            item_number: "",
            location: "",
            general_comments: "",
            addTagModal: false,
            refreshTable: true
        };
        this.toggleAddTagModal = this.toggleAddTagModal.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event)
    {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    toggleAddTagModal()
    {
        this.setState({
            tag_code: "",
            tag_number: "",
            item_name: "",
            item_number: "",
            location: "",
            general_comments: "",
            addTagModal: !this.state.addTagModal,
            refreshTable: !this.state.refreshTable
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
                                                    <TagForm
                                                        tag_code={this.state.tag_code}
                                                        tag_number={this.state.tag_number}
                                                        item_name={this.state.item_name}
                                                        item_number={this.state.item_number}
                                                        location={this.state.location}
                                                        general_comments={this.state.general_comments}
                                                        onChange={this.onChange}
                                                        isOpen={this.state.addTagModal}
                                                        toggle={this.toggleAddTagModal}
                                                    />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <TagTable refreshTable={this.state.refreshTable}/>
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
