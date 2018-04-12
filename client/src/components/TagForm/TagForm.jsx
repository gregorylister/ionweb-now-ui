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
        this.state = {
            tag_code: "",
            tag_number: "",
            item_name: "",
            item_number: "",
            location: "",
            general_comments: "",
            alert: null
        };
        this.successAlert = this.successAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    successAlert()
    {
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{display: "block", marginTop: "-100px"}}
                    title="Tag created..."
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                >
                </SweetAlert>
            )
        });
    }

    hideAlert()
    {
        this.setState({alert: null});
    }

    onChange(event)
    {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    async handleSubmit(event)
    {
        try
        {
            event.preventDefault();
            const {tag_code, tag_number, item_name, item_number, location, general_comments} = this.state;

            await fetch("/tag/add", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tag_code: tag_code,
                    tag_number: tag_number,
                    item_name: item_name,
                    item_number: item_number,
                    location: location,
                    general_comments: general_comments,
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
        const {tag_code, tag_number, item_name, item_number, location, general_comments} = this.state;
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
                                        defaultValue: "",
                                        placeholder: "",
                                    }
                                },
                                {
                                    label : "Code",
                                    inputProps : {
                                        name: "tag_code",
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: "",
                                        value: tag_code,
                                        onChange: this.onChange
                                    }
                                },
                                {
                                    label : "Number",
                                    inputProps : {
                                        name: "tag_number",
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: "",
                                        value: tag_number,
                                        onChange: this.onChange
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
                                        defaultValue: "",
                                        placeholder: "",
                                        value: item_name,
                                        onChange: this.onChange
                                    }
                                },
                                {
                                    label : "Item Number",
                                    inputProps : {
                                        name: "item_number",
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: "",
                                        value: item_number,
                                        onChange: this.onChange
                                    }
                                },
                                {
                                    label : "Location",
                                    inputProps : {
                                        name: "location",
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: "",
                                        value: location,
                                        onChange: this.onChange
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
                                        defaultValue: "",
                                        placeholder: "Enter comments here",
                                        value: general_comments,
                                        onChange: this.onChange
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
