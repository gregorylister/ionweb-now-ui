import React from "react";
import { Button } from "components";
import { UncontrolledTooltip } from "reactstrap";

export const tagTableColumns =
[
    {
        Header: (<div className="outerTableHeader">Tag Details</div>),
        columns:
        [
            {
                Header: (<div className="innerTableHeader">Actions</div>),
                accessor: "actions",
                Cell: row => (
                    <div>
                        <Button
                            style={{height: "18px", marginTop: "0px",  marginBottom: "0px"}}
                            size="sm"
                            id={"edit" + row.index}
                            round icon iconMini neutral
                            color="info"
                        >
                            <i className="now-ui-icons ui-2_settings-90"></i>
                        </Button>
                        <UncontrolledTooltip
                            placement="right"
                            target={"edit" + row.index}
                            delay={0}
                        >
                            Edit tag
                        </UncontrolledTooltip>
                        <Button
                            style={{height: "18px", marginTop: "0px", marginBottom: "0px"}}
                            size="sm"
                            id={"remove" + row.index}
                            round icon iconMini neutral
                            color="danger"
                        >
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                        </Button>
                        <UncontrolledTooltip
                            placement="right"
                            target={"remove" + row.index}
                            delay={0}
                        >
                            Delete tag
                        </UncontrolledTooltip>
                    </div>
                )
            },
            {
                Header: (<div className="innerTableHeader">ID</div>),
                accessor: "id",
            },
            {
                Header: (<div className="innerTableHeader">Code</div>),
                accessor: "tag_code",
            },
            {
                Header: (<div className="innerTableHeader">Number</div>),
                accessor: "tag_number",
            },
            {
                Header: (<div className="innerTableHeader">Item Name</div>),
                accessor: "item_name",
            },
            {
                Header: (<div className="innerTableHeader">Item Number</div>),
                accessor: "item_number",
            },
            {
                Header: (<div className="innerTableHeader">Location</div>),
                accessor: "location",
            },
            {
                Header: (<div className="innerTableHeader">Comments</div>),
                accessor: "general_comments",
            },
            {
                Header: (<div className="innerTableHeader">Updated</div>),
                accessor: "last_modified",
            },
        ],
    },
    {
        Header: (<div className="outerTableHeader">Inspections</div>),
        columns:
        [
            {
                Header: (<div className="innerTableHeader">Frequency</div>),
                accessor: "inspection_frequency",
            },
            {
                Header: (<div className="innerTableHeader">Quantity</div>),
                accessor: "number_of_inspections",
            },
            {
                Header: (<div className="innerTableHeader">Initial Date</div>),
                accessor: "first_inspection_date",
            },
        ],
    },
];

export const inspectionTableColumns =
[
    {
        columns:
        [
            {
                Header: (<div className="innerTableHeader">Number</div>),
                accessor: "inspection_number",
            },
            {
                Header: (<div className="innerTableHeader">Description</div>),
                accessor: "description",
            },
            {
                Header: (<div className="innerTableHeader">Date</div>),
                accessor: "inspection_date",
            },
            {
                Header: (<div className="innerTableHeader">Inspected by</div>),
                accessor: "inspected_by",
            },
            {
                Header: (<div className="innerTableHeader">Additional Service</div>),
                accessor: "additional_service",
                Cell: row => (
                    row.value === true ? "Yes" : "No"
                )
            },
            {
                Header: (<div className="innerTableHeader">Additional Service Details</div>),
                accessor: "additional_service_details",
            },
        ],
    },
];

export const serviceTableColumns =
[
    {
        columns:
        [
            {
                Header: (<div className="innerTableHeader">Number</div>),
                accessor: "service_number",
            },
            {
                Header: (<div className="innerTableHeader">Date</div>),
                accessor: "service_date",
            },
            {
                Header: (<div className="innerTableHeader">Start</div>),
                accessor: "start_date_time",
            },
            {
                Header: (<div className="innerTableHeader">Finish</div>),
                accessor: "end_date_time",
            },
            {
                Header: (<div className="innerTableHeader">Executed by</div>),
                accessor: "executed_by",
            },
            {
                Header: (<div className="innerTableHeader">Approved by</div>),
                accessor: "approved_by",
            },
        ],
    },
];
