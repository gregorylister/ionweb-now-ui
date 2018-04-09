import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from "reactstrap";
import { Button } from "components";
import { FormInputs } from "components";
import Datetime from "react-datetime";
import { style } from "typestyle";

const modalWidth = style({
    minWidth: "300px !important"
});

class TagForm extends React.Component
{
    render()
    {
        return (
            <Modal className={modalWidth} size="lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader className="justify-content-center" toggle={this.props.toggle}>
                    Add Tag
                </ModalHeader>
                <ModalBody>
                    <form>
                        <FormInputs
                            ncols = {["col-md-4 pr-1" , "col-md-4 px-1" , "col-md-4 pl-1"]}
                            proprieties = {[
                                {
                                    label : "ID",
                                    inputProps : {
                                        type : "text",
                                        disabled: true,
                                        defaultValue: ""
                                    }
                                },
                                {
                                    label : "Code",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: ""
                                    }
                                },
                                {
                                    label : "Number",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: ""
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
                                        type : "text",
                                        defaultValue: ""
                                    }
                                },
                                {
                                    label : "Item Number",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: ""
                                    }
                                },
                                {
                                    label : "Location",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: ""
                                    }
                                }
                            ]}
                        />
                        <FormInputs
                            ncols = {["col-md-4 pr-1" , "col-md-4 px-1", "col-md-4 pl-1"]}
                            proprieties = {[
                                {
                                    label : "Inspection Frequency",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Inspection Quantity",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Last Updated",
                                    inputProps : {
                                        type : "date",
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                }
                            ]}
                        />
                        <FormGroup className="col-md-4 pl-1">
                            <Label>Initial Date</Label>
                            <Datetime inputProps={{placeholder: "Datetime picker here"}}/>
                        </FormGroup>
                        <FormInputs
                            ncols = {["col-md-12"]}
                            proprieties = {[
                                {
                                    label : "Comments",
                                    inputProps : {
                                        type : "textarea",
                                        rows: "4",
                                        cols: "80",
                                        defaultValue: "",
                                        placeholder: "Enter comments here"
                                    }
                                }
                            ]}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">
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
