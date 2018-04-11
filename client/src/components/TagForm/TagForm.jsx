import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "components";
import { FormInputs } from "components";
import { style } from "typestyle";

const modalWidth = style({
    minWidth: "300px !important"
});

class TagForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.postData = this.postData.bind(this);
    }

    async postData()
    {
        await fetch("/tag/add", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tag_code: "test",
                tag_number: "1"
            })
        });
    }

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
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Code",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Number",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
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
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Item Number",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
                                    }
                                },
                                {
                                    label : "Location",
                                    inputProps : {
                                        type : "text",
                                        defaultValue: "",
                                        placeholder: ""
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
                    <Button color="primary" onClick={this.postData}>
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
