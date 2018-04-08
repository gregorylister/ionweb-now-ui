import React from "react";
import { Button } from "components";
import { UncontrolledTooltip } from "reactstrap";
import { style } from "typestyle";

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
});

const outerHeaderFont = style({
    textAlign: "left",
    fontWeight: 800,
    fontSize: "large"
});

const tooltipOpacity = style({
    opacity: "1 !important"
});

export const tagTableColumns =
[
    {
        Header: (<div className={outerHeaderFont}>Tag Details</div>),
        columns:
        [
            {
                Header: (<div className={innerHeaderFont}>Actions</div>),
                accessor: "actions",
                Cell: row => (
                    <div>
                        <Button size="sm" id={"edit" + row.index} tiny noMargins icon color="info"><i className="now-ui-icons ui-2_settings-90"></i></Button>
                        <Button size="sm" id={"remove" + row.index} tiny noMargins icon color="danger"><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                        <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"edit" + row.index} delay={0}>Edit tag</UncontrolledTooltip>
                        <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"remove" + row.index} delay={0}> Delete tag</UncontrolledTooltip>
                    </div>
                )
            },
            {
                Header: (<div className={innerHeaderFont}>ID</div>),
                accessor: "id",
            },
            {
                Header: (<div className={innerHeaderFont}>Code</div>),
                accessor: "tag_code",
            },
            {
                Header: (<div className={innerHeaderFont}>Number</div>),
                accessor: "tag_number",
            },
            {
                Header: (<div className={innerHeaderFont}>Item Name</div>),
                accessor: "item_name",
            },
            {
                Header: (<div className={innerHeaderFont}>Item Number</div>),
                accessor: "item_number",
            },
            {
                Header: (<div className={innerHeaderFont}>Location</div>),
                accessor: "location",
            },
            {
                Header: (<div className={innerHeaderFont}>Comments</div>),
                accessor: "general_comments",
            },
            {
                Header: (<div className={innerHeaderFont}>Updated</div>),
                accessor: "last_modified",
            },
        ],
    },
    {
        Header: (<div className={outerHeaderFont}>Inspections</div>),
        columns:
        [
            {
                Header: (<div className={innerHeaderFont}>Frequency</div>),
                accessor: "inspection_frequency",
            },
            {
                Header: (<div className={innerHeaderFont}>Quantity</div>),
                accessor: "number_of_inspections",
            },
            {
                Header: (<div className={innerHeaderFont}>Initial Date</div>),
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
                Header: (<div className={innerHeaderFont}>Number</div>),
                accessor: "inspection_number",
            },
            {
                Header: (<div className={innerHeaderFont}>Description</div>),
                accessor: "description",
            },
            {
                Header: (<div className={innerHeaderFont}>Date</div>),
                accessor: "inspection_date",
            },
            {
                Header: (<div className={innerHeaderFont}>Inspected by</div>),
                accessor: "inspected_by",
            },
            {
                Header: (<div className={innerHeaderFont}>Additional Service</div>),
                accessor: "additional_service",
                Cell: row => (
                    row.value === true ? "Yes" : "No"
                )
            },
            {
                Header: (<div className={innerHeaderFont}>Additional Service Details</div>),
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
                Header: (<div className={innerHeaderFont}>Number</div>),
                accessor: "service_number",
            },
            {
                Header: (<div className={innerHeaderFont}>Date</div>),
                accessor: "service_date",
            },
            {
                Header: (<div className={innerHeaderFont}>Start</div>),
                accessor: "start_date_time",
            },
            {
                Header: (<div className={innerHeaderFont}>Finish</div>),
                accessor: "end_date_time",
            },
            {
                Header: (<div className={innerHeaderFont}>Executed by</div>),
                accessor: "executed_by",
            },
            {
                Header: (<div className={innerHeaderFont}>Approved by</div>),
                accessor: "approved_by",
            },
        ],
    },
];
