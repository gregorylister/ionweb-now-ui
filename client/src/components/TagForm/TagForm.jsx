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
                    tag_code: this.props.tag_code,
                    tag_number: this.props.tag_number,
                    item_name: this.props.item_name,
                    item_number: this.props.item_number,
                    location: this.props.location,
                    general_comments: this.props.general_comments,
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
                    Add Tag
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
                                        placeholder: "",
                                    }
                                },
                                {
                                    label : "Code",
                                    inputProps : {
                                        name: "tag_code",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.tag_code,
                                        onChange: this.props.onChange
                                    }
                                },
                                {
                                    label : "Number",
                                    inputProps : {
                                        name: "tag_number",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.tag_number,
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
                                        name: "item_name",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.item_name,
                                        onChange: this.props.onChange
                                    }
                                },
                                {
                                    label : "Item Number",
                                    inputProps : {
                                        name: "item_number",
                                        type : "text",
                                        placeholder: "",
                                        value: this.props.item_number,
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
                                        name: "general_comments",
                                        type : "textarea",
                                        rows: "4",
                                        cols: "80",
                                        placeholder: "Enter comments here",
                                        value: this.props.general_comments,
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
