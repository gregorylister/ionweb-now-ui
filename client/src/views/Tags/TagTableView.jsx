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

class TagTableView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: "",
            tagCode: "",
            tagNumber: "",
            itemName: "",
            itemNumber: "",
            location: "",
            generalComments: "",
            addTagModal: false,
            refreshTable: true,
            editTagSwitch: false
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

    toggleAddTagModal(fieldState)
    {
        const state = Object.assign(
            {
                addTagModal: !this.state.addTagModal,
                refreshTable: !this.state.refreshTable
            },
            fieldState
        );
        this.setState(state);
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
                                                    <Button
                                                        onClick={() => this.toggleAddTagModal({
                                                            id: "",
                                                            tagCode: "",
                                                            tagNumber: "",
                                                            itemName: "",
                                                            itemNumber: "",
                                                            location: "",
                                                            generalComments: "",
                                                            editTagSwitch: false
                                                        })}
                                                        id="add" size="sm" color="success"
                                                        noMargins round
                                                    >
                                                        <i className="now-ui-icons ui-1_simple-add">
                                                        </i>
                                                    </Button>
                                                    <Button
                                                        id="import" size="sm" color="success"
                                                        noMargins round
                                                    >
                                                        <i className="now-ui-icons arrows-1_share-66">
                                                        </i>
                                                    </Button>
                                                    <Button
                                                        id="delete"size="sm" color="danger"
                                                        noMargins round
                                                    >
                                                        <i className="now-ui-icons ui-1_simple-remove">
                                                        </i>
                                                    </Button>
                                                    <Button
                                                        id="tips"size="sm" color="info"
                                                        noMargins round
                                                    >
                                                        <i className="now-ui-icons travel_info">
                                                        </i>
                                                    </Button>
                                                    <UncontrolledTooltip
                                                        className={tooltipOpacity} placement="right"
                                                        target={"add"} delay={0}
                                                    >
                                                        Add tag
                                                    </UncontrolledTooltip>
                                                    <UncontrolledTooltip
                                                        className={tooltipOpacity} placement="right"
                                                        target={"import"} delay={0}
                                                    >
                                                        Import CSV
                                                    </UncontrolledTooltip>
                                                    <UncontrolledTooltip
                                                        className={tooltipOpacity} placement="right"
                                                        target={"delete"} delay={0}
                                                    >
                                                        Delete selected
                                                    </UncontrolledTooltip>
                                                    <UncontrolledTooltip
                                                        className={tooltipOpacity} placement="right"
                                                        target={"tips"} delay={0}
                                                    >
                                                        Tips
                                                    </UncontrolledTooltip>
                                                    <TagForm
                                                        id={this.state.id}
                                                        tagCode={this.state.tagCode}
                                                        tagNumber={this.state.tagNumber}
                                                        itemName={this.state.itemName}
                                                        itemNumber={this.state.itemNumber}
                                                        location={this.state.location}
                                                        generalComments={this.state.generalComments}
                                                        editTagSwitch={this.state.editTagSwitch}
                                                        isOpen={this.state.addTagModal}
                                                        onChange={this.onChange}
                                                        toggle={this.toggleAddTagModal}
                                                    />
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <TagTable
                                        refreshTable={this.state.refreshTable}
                                        toggleAddTagModal={this.toggleAddTagModal}
                                        onChange={this.onChange}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default TagTableView;
