import React from "react";

export const tagTableColumns =
[
    {
        Header: (<div className="outerTableHeader">Tag</div>),
        columns:
        [
            {
                Header: (<div className="innertableHeader">ID</div>),
                accessor: "id",
            },
            {
                Header: (<div className="innertableHeader">Code</div>),
                accessor: "tag_code",
            },
            {
                Header: (<div className="innertableHeader">Number</div>),
                accessor: "tag_number",
            },
            {
                Header: (<div className="innertableHeader">Item Name</div>),
                accessor: "item_name",
            },
            {
                Header: (<div className="innertableHeader">Item Number</div>),
                accessor: "item_number",
            },
            {
                Header: (<div className="innertableHeader">Location</div>),
                accessor: "location",
            },
        ],
    },
    {
        Header: (<div className="outerTableHeader">Inspection</div>),
        columns:
        [
            {
                Header: (<div className="innertableHeader">Frequency</div>),
                accessor: "inspection_frequency",
            },
            {
                Header: (<div className="innertableHeader">Quantity</div>),
                accessor: "number_of_inspections",
            },
            {
                Header: (<div className="innertableHeader">Initial Date</div>),
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
                Header: (<div className="innertableHeader">Number</div>),
                accessor: "inspection_number",
            },
            {
                Header: (<div className="innertableHeader">Description</div>),
                accessor: "description",
            },
            {
                Header: (<div className="innertableHeader">Date</div>),
                accessor: "inspection_date",
            },
            {
                Header: (<div className="innertableHeader">Inspected by</div>),
                accessor: "inspected_by",
            },
            {
                Header: (<div className="innertableHeader">Additional Service</div>),
                accessor: "additional_service",
                Cell: row => (
                    row.value === true ? "Yes" : "No"
                )
            },
            {
                Header: (<div className="innertableHeader">Additional Service Details</div>),
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
                Header: (<div className="innertableHeader">Number</div>),
                accessor: "service_number",
            },
            {
                Header: (<div className="innertableHeader">Date</div>),
                accessor: "service_date",
            },
            {
                Header: (<div className="innertableHeader">Start</div>),
                accessor: "start_date_time",
            },
            {
                Header: (<div className="innertableHeader">Finish</div>),
                accessor: "end_date_time",
            },
            {
                Header: (<div className="innertableHeader">Executed by</div>),
                accessor: "executed_by",
            },
            {
                Header: (<div className="innertableHeader">Approved by</div>),
                accessor: "approved_by",
            },
        ],
    },
];

export const Tips = () =>
    <div style={{ textAlign: "center" }}>
        Tip: Hold shift when sorting to multi-sort!
    </div>;
