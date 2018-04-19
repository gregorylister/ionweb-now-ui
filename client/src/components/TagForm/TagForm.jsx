import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "components";
import { FormInputs } from "components";
import { style } from "typestyle";
import SweetAlert from "react-bootstrap-sweetalert";

const modalWidth = style({
    minWidth: "300px !important"
});

class TagForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {alert: null};
        this.successAlert = this.successAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    successAlert()
    {
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{display: "block", marginTop: "-200px"}}
                    title="Success!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                >
                Tag created
                </SweetAlert>
            )
        });
    }

    hideAlert()
    {
        this.setState({alert: null});
    }

    async handleSubmit(event)
    {
        try
        {
            event.preventDefault();

            await fetch("/tag/add", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tag_code: this.props.tagCode,
                    tag_number: this.props.tagNumber,
                    item_name: this.props.itemName,
                    item_number: this.props.itemNumber,
                    location: this.props.location,
                    general_comments: this.props.generalComments,
                    last_modified: new Date()
                })
            });
            this.successAlert();
        }
        catch (err)
        {
            console.error(err);
        }
    }

    render()
    {
        return (
            <Modal className={modalWidth} size="lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
                {this.state.alert}
                <ModalHeader className="justify-content-center" toggle={this.props.toggle}>
                    {!this.props.editTagSwitch ? "Add Tag" : "Edit Tag"}
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <FormInputs
                            ncols = {["col-md-4 pr-1" , "col-md-4 px-1" , "col-md-4 pl-1"]}
                            proprieties = {[
                                {
                                    label : "ID",
                                    inputProps : {
                                        name: "id",
                                        type : "text",
                                        disabled: true,
                                        placeholder: this.props.id,
                                    }
                                },
                                {
                                    label : "Code",
                                    inputProps : {
                                        name: "tagCode",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.tagCode,
                                        onChange: this.props.onChange
                                    }
                                },
                                {
                                    label : "Number",
                                    inputProps : {
                                        name: "tagNumber",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.tagNumber,
                                        onChange: this.props.onChange
                                    }
                                }
                            ]}
                        />
                         <FormInputs
                            ncols = {["col-md-4 pr-1" , "col-md-4 px-1" , "col-md-4 pl-1"]}
                            proprieties = {[
                                {
                                    label : "Item Name",
                                    inputProps : {
                                        name: "itemName",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.itemName,
                                        onChange: this.props.onChange
                                    }
                                },
                                {
                                    label : "Item Number",
                                    inputProps : {
                                        name: "itemNumber",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.itemNumber,
                                        onChange: this.props.onChange
                                    }
                                },
                                {
                                    label : "Location",
                                    inputProps : {
                                        name: "location",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.location,
                                        onChange: this.props.onChange
                                    }
                                }
                            ]}
                        />
                        <FormInputs
                            ncols = {["col-md-12"]}
                            proprieties = {[
                                {
                                    label : "Comments",
                                    inputProps : {
                                        name: "generalComments",
                                        type : "textarea",
                                        rows: "4",
                                        cols: "80",
                                        placeholder: "Enter comments here",
                                        value: this.props.generalComments,
                                        onChange: this.props.onChange
                                    }
                                }
                            ]}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    <Button color="danger" onClick={this.props.toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TagForm;
